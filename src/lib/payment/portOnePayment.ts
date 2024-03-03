import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { fetchOrdersPayment, fetchPaymentVerify } from '@/api/resource/payment'
import { encodePaymentVerifyParams } from '@/api/service/payment'
import { basePath } from '@/api/util/instance'
import { IOrder } from '@/types/order'
import {
  DELIVERY_CHARGE,
  IPaymentParams,
  PaymentResponse,
  PaymentSuccessQueryParams,
  PortOneResponseDTO,
} from '@/types/payment'
import { RequestPayParams, RequestPayResponse, RequestPayResponseCallback } from '@/types/portone'

import { OrderFormInterface } from '../schema/order'

export function initializePaymentModule() {
  if (!window.IMP) return
  console.log('initialize IMP')
  window.IMP.init(`${process.env.NEXT_PUBLIC_PORTONE_ID_CODE}`)
}

export function getMerchantUID(orderIdfromServer: number) {
  return `mid_${new Date().getTime()}_${orderIdfromServer}_${crypto.randomUUID()}`
}

export function requestPayment(body: RequestPayParams, callback: RequestPayResponseCallback) {
  console.log('portone request', body)

  if (!window.IMP) return
  return window.IMP?.request_pay(body, callback)
}

export const createPaymentParamFactory = (data: OrderFormInterface, orders: IOrder, orderName: string) => ({
  getPaymentResquestParam: (): IPaymentParams => {
    return {
      orderId: orders.orderId,
      totalPrice: orders.totalAmount,
      paymentMethod: data.payment_method,
      couponId: !data.coupon ? null : Number(data.coupon),
    }
  },
  getProtOneRequestParam: (paymentResponse: PaymentResponse): RequestPayParams => {
    console.log(paymentResponse)
    return {
      pg: String(data.payment_method),
      pay_method: 'card',
      name: `${orderName}`,
      merchant_uid: getMerchantUID(paymentResponse.paymentId),
      amount: Number(paymentResponse.totalAmount + DELIVERY_CHARGE),
    }
  },
})

export const paymentRequestToServer = async (
  resquestParam: IPaymentParams,
): Promise<PaymentResponse | PortOneResponseDTO> => {
  const paymentRes: { data: PaymentResponse } = await fetchOrdersPayment(resquestParam)

  if (paymentRes.data.errorMessage) {
    return PaymentReponseDTOFactory().fail(
      `${paymentRes.data.errorMessage}`,
      paymentRes.data.errorMessage,
      `${basePath}`,
    )
  }

  return paymentRes.data
}

export const PortOneCallback =
  (paymentRes: PaymentResponse, postprocess: (result: PortOneResponseDTO) => void) =>
  (response: RequestPayResponse) => {
    portone_response_verification(postprocess, response)
    request_payment_verification(postprocess, { response, paymentRes })
  }

/*
ready(브라우저 창 이탈, 가상계좌 발급 완료 등 미결제 상태)
paid(결제완료)
failed(신용카드 한도 초과, 체크카드 잔액 부족, 브라우저 창 종료 또는 취소 버튼 클릭 등 결제실패 상태)
*/
export const portone_response_verification = (
  postprocess: (result: PortOneResponseDTO) => void,
  response: RequestPayResponse,
) => {
  const { status, error_msg, success } = response
  if (error_msg && !success) {
    return postprocess(PaymentReponseDTOFactory().fail('포트원 결제 시 에러 발생', error_msg, `${basePath}`))
  }
  if (status === 'ready') {
    return postprocess(PaymentReponseDTOFactory().fail('결제가 완료되지 않았습니다', error_msg, `${basePath}`))
  }
  if (status === 'failed') {
    return postprocess(
      PaymentReponseDTOFactory().fail('결제가 실패했습니다 메인화면으로 이동합니다.', error_msg, `${basePath}`),
    )
  }
  // status === "paid"
  return response
}

// 포트원 결제 결과와 백엔드 결제 데이터 검증
export const request_payment_verification = async (
  postprocess: (result: PortOneResponseDTO) => void,
  {
    response,
    paymentRes,
  }: {
    response: RequestPayResponse
    paymentRes: PaymentResponse
  },
) => {
  // 아임포트에서 채번한 결제 id, 총결제 금액, 상품명
  const { imp_uid, paid_amount, name } = response
  const verifyResponse = await fetchPaymentVerify(encodePaymentVerifyParams(imp_uid!, paymentRes.paymentId))
  return !verifyResponse.msg
    ? postprocess(
        PaymentReponseDTOFactory().success(`${basePath}/order-complete/${paymentRes.paymentId}`, {
          name: name!,
          paid_amount: paid_amount!,
        }),
      )
    : postprocess(
        PaymentReponseDTOFactory().fail(
          '결제 검증에 실패했습니다 메인화면으로 이동합니다.',
          verifyResponse.msg,
          `${basePath}`,
        ),
      )
}

//
const PaymentReponseDTOFactory = () => ({
  success: (redirect_path: string, query_params?: PaymentSuccessQueryParams): PortOneResponseDTO => {
    return {
      redirect_path,
      query_params,
    }
  },

  fail: (modal_statement: string, error_msg: string | undefined, redirect_path: string): PortOneResponseDTO => {
    return {
      modal_statement,
      error_msg,
      redirect_path,
    }
  },
})

export const paymentPostProcess =
  (router: AppRouterInstance, orders: IOrder, openCheckModal: (content: string, onClick?: () => void) => void) =>
  (result: PortOneResponseDTO) => {
    if (result.error_msg) {
      return openCheckModal(result.modal_statement!, () => router.push(result.redirect_path))
    }
    if (result.query_params) {
      const { name, paid_amount } = result.query_params
      const destination = `${result.redirect_path}?orderName=${name}&memberName=${orders.memberName}&paid_amount=${paid_amount}`
      return router.push(destination)
    }
    return router.push(result.redirect_path)
  }
