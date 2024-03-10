'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'

import { getPresignedURL } from '@/api/resource/review'
import SvgIconPlusMono from '@/components/icons/icon-plus-mono'
import { Button } from '@/components/ui/button'

const ACTIONS = {
  ADD_IMAGE: 'ADD_IMAGE',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
}

function imageReducer(state: any, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_IMAGE:
      return {
        ...state,
        imagePreviews: [...state.imagePreviews, URL.createObjectURL(action.payload.file)],
        presignedURLs: [...state.presignedURLs, action.payload.presignedURL],
        imageURLs: [...state.imageURLs, encodeURI(action.payload.imageURL)],
      }
    case ACTIONS.REMOVE_IMAGE:
      console.log(state, 'state!!!!!!!!!!')
      return {
        ...state,
        imagePreviews: state.imagePreviews.filter((_: any, index: number) => index !== action.payload.index),
        presignedURLs: state.presignedURLs.filter((_: any, index: number) => index !== action.payload.index),
        imageURLs: state.imageURLs.filter((_: any, index: number) => index !== action.payload.index),
      }
    default:
      return state
  }
}

export default function ReviewForm({ itemId }: { itemId: number | null }) {
  const router = useRouter()

  const [imageStates, dispatch] = useReducer(imageReducer, {
    imagePreviews: [],
    presignedURLs: [],
    imageURLs: [],
  })

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

  const validateImage = (imageFile: FileList | null) => {
    if (imageFile === null || imageFile.length !== 1) {
      console.log('잘못된 접근 : 업로드 하려는 이미지가 존재하지 않습니다.')
      return
    }
    if (images.length + imageFile.length > 5) {
      console.log('이미지를 5장 초과하여 업로드할 수 없습니다.')
      return
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFiles = e.target.files
    validateImage(imageFiles)

    const file = imageFiles!.item(0)!

    setValue('images', [...images, file])

    const presignedURL = await getPresignedURL(file.name)
    const imageURL = `https://asac-marketplace-s3.s3.ap-northeast-2.amazonaws.com/${file.name}`

    dispatch({ type: ACTIONS.ADD_IMAGE, payload: { file, presignedURL, imageURL } })
  }

  const removeImage = (index: number) => {
    setValue(
      'images',
      images.filter((_: any, i: number) => i !== index),
    )
    dispatch({ type: ACTIONS.REMOVE_IMAGE, payload: { index } })
  }

  const send = async (data: Record<string, any>) => {
    setIsLoading(true)

    const uploadImagePromises: Promise<any>[] = data.images.map((file: File, index: number) =>
      uploadImage(imageStates.presignedURLs[index].msg, file),
    )
    // Promise.all(uploadImagePromises).then().catch()
    Promise.all(uploadImagePromises)
      .then(() => {
        const reviewData = JSON.stringify({
          memberId: 1,
          itemId: itemId!,
          comment: data.content,
          rating: 0,
          imageUrls: imageStates.imageURLs,
        })
        fetch('/api/addReview', {
          method: 'POST',
          body: reviewData,
        })
          .then(() => {
            setIsLoading(false)
            router.push('/myPage')
          })
          .catch(() => {
            throw new Error('failed to post review')
          })
      })
      .catch(() => {
        throw new Error('failed to upload images to s3')
      })
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(send)}>
      <input
        {...register('title', { required: '제목을 입력해주세요' })}
        className="h-12 rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:outline-0"
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
        className="h-32 rounded-md border border-gray-300 p-3 text-sm focus:border-black focus:outline-0"
        placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며, 일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성시 검토 후 비공개 조치될 수 있습니다. 반품/환불 문의는 1:1문의로 가능합니다."
      />
      {errors.content && (
        <span>{typeof errors.content.message === 'string' ? errors.content.message : '제목을 입력해주세요'}</span>
      )}

      <div className="flex flex-col gap-4">
        <div className="text-title-sm">사진등록</div>
        <div className="grid h-full grid-cols-4 gap-2">
          {imageStates.imagePreviews.map((preview: string, index: number) => (
            <div key={index} className="relative aspect-square basis-1/4">
              <Image
                className="h-full w-full rounded-md object-cover"
                src={preview}
                alt={`preview-${index}`}
                width={80}
                height={80}
              />
              <button
                type="button"
                className="absolute right-[-2px] top-[-2px] h-5 w-5 rounded-full bg-grayscale-300 text-body-min text-white"
                onClick={() => removeImage(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="relative h-20 w-20 rounded-md border-2">
          <input
            {...register('images')}
            type="file"
            id="file"
            name="cardImg"
            // ref={imgRef}
            className="h-full w-full border-2 opacity-0"
            onChange={handleFileChange}
            // 파일이 최대/최소 하나여야 한다
            accept=".gif, .jpg, .png"
          ></input>
          <SvgIconPlusMono
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
            height={'1.5rem'}
            width={'1.5rem'}
          />
        </div>
        <div className="text-xs text-grayscale-300">
          구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및 적립 혜택이 취소됩니다.
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 h-20 w-96 -translate-x-1/2 bg-white p-4">
        {isLoading ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="border-primary h-10 w-10 animate-spin rounded-full border-b-2"></div>
          </div>
        ) : (
          <Button type="submit" variant={'primary'} className="h-full w-full">
            등록하기
          </Button>
        )}
      </div>
    </form>
  )
}
