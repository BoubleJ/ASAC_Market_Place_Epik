import Image from 'next/image'
import React from 'react'

import { fetchDownloadCoupon } from '@/api/resource/coupon'
import SvgShare from '@/components/icons/share'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export default function ItemMainInfo({ tabParam, itemData }: { tabParam: string | null; itemData: any }) {
  const { toast } = useToast()
  const itemDetails = itemData.data
  console.log(tabParam)

  const renderToastWithAddCoupon = async () => {
    const msg = await fetchDownloadCoupon()
    console.log(msg)
  }

  return (
    <>
      {tabParam === undefined && (
        <div className="h-screen">
          <div className="h-1/2 w-full">
            <Image
              // src={itemDetails.detailImages[0]}
              src={'/images/hotdog.svg'}
              alt="df"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-nowrap gap-1 px-4 py-5">
            <div className="text-body-xs text-grayscale-400">{itemDetails.deliveryMethod}</div>
            <div className="flex items-center justify-between gap-10 pr-4">
              <div className="text-body-md">{itemDetails.itemName}</div>
              <div className="text-body-md">
                <SvgShare width={'1.5rem'} height={'1.5rem'} fill="transparent" />
              </div>
            </div>
            <div className="text-body-xs font-light text-grayscale-400">{itemDetails.itemInfo}</div>
            <div className="flex items-center gap-1 text-body-lg">
              <div className="text-red-500">{itemDetails.discountRate}%</div>
              <div className="font-semibold text-zinc-800">
                {(itemDetails.itemPrice * (100 - itemDetails.discountRate)) / 100}원
              </div>
            </div>
            <div className="relative w-14 text-sm text-grayscale-200">
              <span>{itemDetails.itemPrice}원</span>
              <span className="absolute left-0 top-[10px] w-full bg-grayscale-200" style={{ height: '1px' }} />
            </div>
            <div className=" text-body-mini text-brand-primary-500">{itemDetails.notes}</div>
            {/* {itemDetails.couponId && <div>{itemDetails.coupon.discountType}</div>} */}

            <button
              className="my-3 rounded-md border border-brand-primary-500 p-2 text-sm text-brand-primary-500"
              onClick={() => {
                renderToastWithAddCoupon()
                toast({
                  title: '쿠폰 발급 성공',
                  description: '쿠폰이 정상적으로 발급되었습니다.',
                  action: <ToastAction altText="Try again">닫기</ToastAction>,
                })
              }}
            >
              10% 쿠폰 받기
            </button>
         
            <div className="border-b border-gray-200 py-1" id="seller"></div>
            <div className="grid grid-cols-4 place-content-start gap-y-1 pt-4 text-body-xs text-grayscale-400">
              <div className="col-span-1 text-left">배송</div>
              <div className=" col-span-3 text-left">{itemDetails.deliveryMethod}</div>
              <div className=" col-span-1 text-left">판매자</div>
              <div className=" col-span-3 text-left">{itemDetails.sellerInfo}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
