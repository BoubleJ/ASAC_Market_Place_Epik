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

  createPaymentParam = (): IPaymentParams => {
    return {
      orderId: this.orders.orderId,
      totalPrice: this.orders.totalAmount,
      paymentMethod: this.data.payment_method,
      couponId: !this.data.coupon ? null : this.data.coupon,
      // couponId: !this.data.coupon ? null : this.data.coupon,
    }
  }

  createPortOnePaymentParam = (): RequestPayParams => {
    return {
      pg: String(this.data.payment_method),
      pay_method: 'card',
      name: `${this.orderName}`,
      merchant_uid: getMerchantUID(this.orders.orderId),
      amount: Number(this.orders.totalAmount! + DELIVERY_CHARGE),
    }
  }
}
