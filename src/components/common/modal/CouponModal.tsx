import React, { useEffect, useState } from 'react'

import { fetchCouponList } from '@/api/resource/coupon'
import { useModalState } from '@/components/provider/modalProvider'
import { Button } from '@/components/ui/button'
import { convertStringToDateFormaUTC } from '@/lib/utils'
import { Coupon } from '@/types/coupon'

interface ICouponModal {
  content: Coupon[]
  onCheck?: (coupon: Coupon) => void
  onCancel?: () => void
}

export default function CouponModal({ content, onCheck, onCancel }: ICouponModal) {
  const state = useModalState()
  const [coupons, setCoupons] = useState<Coupon[]>(content)
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null)
  const [errorMsg, setErrorMsg] = useState<string>('')

  useEffect(() => {
    fetchCouponList().then((res) => {
      console.log('쿠폰 출력', res)
      if (res.msg) {
        setErrorMsg(res.msg)
        return
      }
      setCoupons(res)
    })
  }, [])

  const handleCouponSelect = (coupon: Coupon) => {
    setSelectedCoupon(coupon)
  }

  const handleCheck = () => {
    if (onCheck !== undefined && selectedCoupon !== null) {
      onCheck(selectedCoupon)
    }
    state.modalRef.current?.close()
  }
  const handleCancel = () => {
    if (onCancel !== undefined) {
      onCancel()
    }
    state.modalRef.current?.close()
  }

  return (
    <>
      <section className="w-[320px] px-8 py-5 text-start text-body-md">
        <form method="dialog">
          <ul>
            {coupons.map((coupon: Coupon) => {
              const couponChoice = coupon.id === selectedCoupon?.id
        
              return (
                <li key={coupon.id}>
                  <button
                    type="button"
                    onClick={() => handleCouponSelect(coupon)}
                    className={`mb-5 h-20 w-full rounded-md border-2  border-solid border-grayscale-100 ${couponChoice ? 'border-red-500' : ''}`}
                  >
                    <div>
                      <p className="text-body-2xl">{coupon.couponName}</p>

                      <p className="text-xs text-purple-800">
                        {coupon.validFrom ? (
                          <div>
                            <p>{convertStringToDateFormaUTC(coupon.validFrom)}부터</p>
                            <p>{convertStringToDateFormaUTC(coupon.validTo)}까지 사용가능</p>
                          </div>
                        ) : (
                          '기간 제한 없음'
                        )}
                      </p>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </form>
      </section>
      <div className="flex justify-end text-body-md">
        <Button
          variant={'outline'}
          className="ouline-none ring-none h-10 rounded-none border-none hover:bg-transparent"
          onClick={handleCancel}
        >
          취소
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          className="ouline-none ring-none h-10 rounded-none border-none hover:bg-transparent"
          onClick={handleCheck}
        >
          적용하기
        </Button>
      </div>
    </>
  )
}
