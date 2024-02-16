'use client'

import React, { useState } from 'react'

import { baseURL } from '@/api/util/instance'
import AddInquiryBottomSeat from '@/components/feature/addInquiry/AddInquiryBottomSeat'
import AddInquiryTypeBox from '@/components/feature/addInquiry/AddInquiryTypeBox'
import SvgIconPlusMono from '@/components/icons/icon-plus-mono'
import { Button } from '@/components/ui/button'

export default function page() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const list = ['불만', '가득', '이게 나라냐 ']
  const [inquiryType, setInquiryType] = useState(list[0])
  const [src, setSrc] = useState('')

  return (
    <>
      <div className="w-full h-full p-4">
        <p className="text-body-base pb-2">
          문의 유형<span className="text-red-600">*</span>
        </p>
        <AddInquiryTypeBox setIsBottomSheetOpen={setIsBottomSheetOpen} inquiryType={inquiryType} />
        <AddInquiryBottomSeat
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          list={list}
          setInquiryType={setInquiryType}
        />
        <form action="/api" method="POST">
          <p className="text-body-base pb-2">
            문의 내용<span className="text-red-600">*</span>
          </p>
          <input
            className="border focus:border-black focus:outline-0 h-12 rounded-md p-2 text-sm border-gray-300 w-full mb-4"
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
          />
          <textarea
            className="border focus:border-black focus:outline-0 h-32 rounded-md p-3 text-sm border-gray-300 w-full mb-12"
            placeholder="문의하실 내용을 입력해주세요."
            name="content"
          />
        </form>
        <div className="flex flex-col gap-4">
          <div className="w-20 h-20 border-2 rounded-md relative">
            <input
              type="file"
              id="file"
              name="cardImg"
              className="opacity-0 h-full w-full border-2"
              multiple
              accept="image/*"
              onChange={async (e) => {
                let file = e.target.files[0]
                let filename = encodeURIComponent(file.name)
                let res = await fetch(
                  `${baseURL}/reviews/generate-presigned-url?fileName=${filename}&contentType=image/jpeg`,
                )
                res = await res.json()
                console.log(res)

                //S3 업로드
                const formData = new FormData()
                Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                  formData.append(key, value)
                })
                let 업로드결과 = await fetch(res.msg, {
                  method: 'PUT',
                  body: formData,
                })
                console.log(업로드결과)

                const imageURL = 업로드결과.url.split('?')[0]
                console.log(imageURL)
                setSrc(imageURL)
                console.log(src)
               // if (업로드결과.ok) {
                //  setSrc(업로드결과.url + '/' + filename)
                 // console.log(src)
              //  } else {
               //   console.log('실패')
             //   }
              }}
            ></input>
            <SvgIconPlusMono
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
              height={'1.5rem'}
              width={'1.5rem'}
            />
            <img src={src} alt="왜안나와"></img>
          </div>
          <div className="text-xs text-grayscale-300">
            <p>30MB 이하의 이미지만 업로드 가능합니다.</p>
            <p>상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제 될 수 있습니다.</p>
            <p>사진은 최대 8장 등록 가능합니다.</p>
          </div>
        </div>
        <div className="fixed bottom-0 p-4 left-1/2 -translate-x-1/2 w-96 h-20 bg-white">
          <Button type="submit" variant={'primary'} className="w-full h-full">
            등록하기
          </Button>
        </div>
      </div>
    </>
  )
}
