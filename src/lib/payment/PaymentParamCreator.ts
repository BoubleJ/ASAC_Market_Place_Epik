import { getMerchantUID } from '@/lib/payment/portOnePayment'
import { OrderFormInterface } from '@/lib/schema/order'
import { IOrder } from '@/types/order'
import { DELIVERY_CHARGE, IPaymentParams } from '@/types/payment'
import { RequestPayParams } from '@/types/portone'

interface IPaymentParamCreator {
  createPaymentParam: () => IPaymentParams
  createPortOnePaymentParam: () => RequestPayParams
}

export class PaymentParamCreator implements IPaymentParamCreator {
  private orders: IOrder
  private data: OrderFormInterface
  private orderName: string

  constructor(orders: IOrder, data: OrderFormInterface, orderName: string) {
    this.orders = orders
    this.data = data
    this.orderName = orderName
  }
  //여기 order는 쿠폰 적용 전 가격

  createPaymentParam = (): IPaymentParams => {
    return {
      orderId: this.orders.orderId,
      totalPrice: this.orders.totalAmount,
      paymentMethod: this.data.payment_method,
    //  couponId: !this.data.coupon ? null : this.data.coupon,
      // couponId: !this.data.coupon ? null : this.data.coupon,
    }
  }
  //장바구니 생성 당시 orders 생성. (백엔드에서)



  createPortOnePaymentParam = (): RequestPayParams => {
    return {
      pg: String(this.data.payment_method),
      pay_method: 'card',
      name: `${this.orderName}`,
      merchant_uid: getMerchantUID(this.orders.orderId),
      amount: Number(this.orders.totalAmount! + DELIVERY_CHARGE),
    } //paymet amount가 들어가야함 
  }
}
