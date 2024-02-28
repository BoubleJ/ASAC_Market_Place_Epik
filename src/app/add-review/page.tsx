'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { getPresignedURL } from '@/api/resource/review'
import SvgIconPlusMono from '@/components/icons/icon-plus-mono'
import { Button } from '@/components/ui/button'

export default function AddReviewPage() {
  const router = useRouter()
  const params = useSearchParams()
  const itemId = params.get('itemId')
  const itemName = params.get('itemName')
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [presignedURLs, setPresignedURLs] = useState<string[]>([])
  const [imageURLs, setImageURLs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm()

  const images = watch('images', [])

  const uploadImage = async (presignedURL: string, imageFile: File | null) => {
    try {
      const fileUpload = await fetch(presignedURL, {
        method: 'PUT',
        body: imageFile,
      })
      console.log(fileUpload, '!!!!!!!!')
    } catch (error) {
      console.error(error, '이미지 업로드 실팽이팽이')
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (images.length + e.target.files.length > 5) {
        console.log('이미지를 5장 초과하여 업로드할 수 없습니다.')
        return
      }

      const fileName = e.target.files.item(0)!.name
      const newImages = Array.from(e.target.files)
      const presignedURL = await getPresignedURL(fileName)
      const imageURL = `https://asac-marketplace-s3.s3.ap-northeast-2.amazonaws.com/${fileName}`

      setPresignedURLs((prevURLs) => [...prevURLs, presignedURL.msg])
      setImageURLs((prevURLs) => [...prevURLs, encodeURI(imageURL)])

      setValue('images', [...images, ...newImages])
      setImagePreviews([...imagePreviews, ...newImages.map((file: File) => URL.createObjectURL(file))])
    }
  }

  const removeImage = (index: number) => {
    setValue(
      'images',
      images.filter((_: any, i: number) => i !== index),
    )
    setImagePreviews(imagePreviews.filter((_: any, i: number) => i !== index))
  }

  const send = async (data: Record<string, any>) => {
    setIsLoading(true)

    data.images.forEach((file: File, index: number) => {
      uploadImage(presignedURLs[index], file)
    })

    const reviewData = JSON.stringify({
      memberId: 1,
      itemId: parseInt(itemId!),
      comment: data.content,
      rating: 0,
      imageUrls: imageURLs,
    })

    try {
      const response = await fetch('/api/addReview', {
        method: 'POST',
        body: reviewData,
      })
      // 에러 처리 추가
      router.push('/myPage')
    } catch (error) {
      console.error('error fetching addreview ', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen p-4 flex flex-col gap-4">
      <div className="text-title-sm border-b pb-4">{itemName}</div>
      <div className="text-title-sm">후기쓰기</div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(send)}>
        <input
          {...register('title', { required: '제목을 입력해주세요' })}
          className="border focus:border-black focus:outline-0 h-12 rounded-md p-2 text-sm border-gray-300"
          type="text"
          placeholder="제목을 입력해주세요"
        />
        {errors.title && (
          <span>{typeof errors.title.message === 'string' ? errors.title.message : '제목을 입력해주세요'}</span>
        )}
        <textarea
          {...register('content', {
            minLength: { value: 10, message: '최소 10자 이상 입력하세요' },
          })}
          className="border focus:border-black focus:outline-0 h-32 rounded-md p-3 text-sm border-gray-300"
          placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며, 일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성시 검토 후 비공개 조치될 수 있습니다. 반품/환불 문의는 1:1문의로 가능합니다."
        />
        {errors.content && (
          <span>{typeof errors.content.message === 'string' ? errors.content.message : '제목을 입력해주세요'}</span>
        )}

        <div className="flex flex-col gap-4">
          <div className="text-title-sm">사진등록</div>
          <div className="h-full grid grid-cols-4 gap-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative aspect-square basis-1/4">
                <Image
                  className="h-full w-full object-cover rounded-md"
                  src={preview}
                  alt={`preview-${index}`}
                  width={80}
                  height={80}
                />
                <button
                  type="button"
                  className="absolute top-[-2px] right-[-2px] text-body-min w-5 h-5 bg-grayscale-300 text-white rounded-full"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="w-20 h-20 border-2 rounded-md relative">
            <input
              {...register('images')}
              type="file"
              id="file"
              name="cardImg"
              // ref={imgRef}
              className="opacity-0 h-full w-full border-2"
              onChange={handleFileChange}
              multiple
            ></input>
            <SvgIconPlusMono
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
              height={'1.5rem'}
              width={'1.5rem'}
            />
          </div>
          <div className="text-xs text-grayscale-300">
            구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및 적립 혜택이 취소됩니다.
          </div>
        </div>

        <div className="fixed bottom-0 p-4 left-1/2 -translate-x-1/2 w-96 h-20 bg-white">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
            </div>
          ) : (
            <Button type="submit" variant={'primary'} className="w-full h-full">
              등록하기
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
