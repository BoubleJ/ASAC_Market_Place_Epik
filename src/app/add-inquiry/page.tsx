'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { baseURL } from '@/api/util/instance'
import AddInquiryBottomSeat from '@/components/feature/addInquiry/AddInquiryBottomSeat'
import AddInquiryTypeBox from '@/components/feature/addInquiry/AddInquiryTypeBox'
import SvgIconPlusMono from '@/components/icons/icon-plus-mono'
import { Button } from '@/components/ui/button'

export default function page() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const list = ['불만', '가득', '이게 나라냐 ']
  const [inquiryType, setInquiryType] = useState(list[0])
  const router = useRouter()
  const [isImage, setIsImage] = useState(false)

  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [presignedURLs, setPresignedURLs] = useState<string[]>([])
  const [imageURLs, setImageURLs] = useState<string[]>([])

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
      //presignedURLs라는 배열 내부 요소들을 presignedURL이라 지정하고 그 주소에 put 요청을 보낸다. body에 file을 imageFile이라는 이름으로 담고
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
      //이미지 업로드 개수 제한있으니까 if문을 통해 이미지 개수 제한을 걸어둠



      
      //서버에서 presignURL을 받아오는 코드
      const getPresignedURL = async (fileName: { name: string | number | boolean }) => {
        let filename = encodeURIComponent(fileName)
        let res = await fetch(`${baseURL}/reviews/generate-presigned-url?fileName=${filename}&contentType=image/jpg`)
        res = await res.json()
        console.log(res)
        return res
       
      }
  



      console.log('!!!방금 업로드된 이미징', e.target.files.item(0)?.name)

      const fileName = e.target.files.item(0)!.name
      //업로드한 이미지의 파일 이름만 따로 뽑음
      const imageFile = e.target.files.item(0)
      //이건 이미지 파일 자체를 뽑음
      const newImages = Array.from(e.target.files)
      //업로드하는 이미지 파일 자체들을 배열형태로 저장


   const presignedURL = await getPresignedURL(fileName)




      // let file = e.target.files[0]
      // let filename = encodeURIComponent(file.name)
      // let res = await fetch(
      //   `${baseURL}/api/reviews/generate-presigned-url?fileName=${filename}&contentType=image/jpeg`,
      // )
      // res = await res.json()
      // console.log(res)







      console.log(presignedURL.msg, fileName)
      //실제 백엔드 API CALL 시에 넣어줄 링크 만드는 코드
      const imageURL = `https://asac-marketplace-s3.s3.ap-northeast-2.amazonaws.com/${fileName}`

      console.log('!!!!!!!!!!!!!!!!!rrrrr', encodeURI(imageURL))














      // SETSTATE 함수 함수형 업데이트 활용
      // prevURLs은 PresignedURLs를 의미하고 전개연산자를 활용해서  presignedURL의 msg 프로퍼티를 PresignedURLs라는 배열내부에 삽입해줌.
      setPresignedURLs((prevURLs) => [...prevURLs, presignedURL.msg])
      // prevURLs은 PresignedURLs를 의미하고 전개연산자를 활용해서  인코딩한  imageURL 객체를 ImageURLs라는 배열내부에 삽입해줌.
      //그리고 이 ImageURLs이라는 배열 데이터를  post 요청 시 body 에 넣어주는 것
      setImageURLs((prevURLs) => [...prevURLs, encodeURI(imageURL)])

      console.log('Array.from(e.target.files)[0]: ', newImages[0])

      //여긴 리액트 훅 폼인것 같은데 잘 모르겠음
      setValue('images', [...images, ...newImages])
      setImagePreviews([...imagePreviews, ...newImages.map((file: File) => URL.createObjectURL(file))])
    }
    setIsImage(true)
  }

  //브라우저에 미리보기로 띄워진 이미지 제거 함수 (x버튼 누르는거)
  const removeImage = (index: number) => {
    setValue(
      'images',
      images.filter((_: any, i: number) => i !== index),
    )
    setImagePreviews(imagePreviews.filter((_: any, i: number) => i !== index))
  }






  //문의 등록 클릭 시 s3 에 실제로 업로드되는 코드 리액트 훅 폼의 속성을 이용해서 send를 콜백함수로 호출하는 듯 하다.
  const send = async (data: Record<string, any>) => {
    //form 요청 시 받아오는 data 기반으로 foreach 반복문 돌려서 uploadImage 함수 실행
    //data.image의 각각 file들을 매개변수로 넘겨줌
    data.images.forEach((file: File, index: number) => {
      console.log('인덱스', index)
      uploadImage(presignedURLs[index], file)
    })
    // prevURLs은 PresignedURLs를 의미하고 전개연산자를 활용해서  presignedURL의 msg 프로퍼티를 PresignedURLs라는 배열내부에 삽입해줌 이라고 설명하는 PresignedURLs 배열을 인덱스 돌려서 각각 uploadImage 함수를 실행해줌







    //post 요청 시 body에 넣을 데이터를 변수에 저장
    const reviewData = JSON.stringify({
      memberId: 1,
      inquiryType: 'OTHER',
      title: 'efewa',
      //문의 제목
      content: 'testcontent',
      //문의 내용
      contactNumber: '000111111',
      notificationEnabled: true,
      imageUrls: imageURLs,
    })

    try {
      //실제 백엔드에 post 요청 call 맞나???
      // 일단 next 서버 단 api 주소로 post 요청 call하는 곳
      //위에 만든 reviewData를 body 에 담아서 요청
      const response = await fetch('/api/addInquiry', {
        method: 'POST',
        body: reviewData,
      })
      // 에러 처리 추가
      router.push('/myPage')
      //ost 요청이 끝나면 myPage페이지로 이동
    } catch (error) {
      console.error('error fetching addinquiry ', error)
    }
  }

  return (
    <>
      <div className="h-full w-full p-4">
        <p className="pb-2 text-body-base">
          문의 유형<span className="text-red-600">*</span>
        </p>
        <AddInquiryTypeBox setIsBottomSheetOpen={setIsBottomSheetOpen} inquiryType={inquiryType} />
        <AddInquiryBottomSeat
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
          list={list}
          setInquiryType={setInquiryType}
        />
        <form onSubmit={handleSubmit(send)}>
          <p className="pb-2 text-body-base">
            문의 내용<span className="text-red-600">*</span>
          </p>
          <input
            {...register('title', { required: '제목을 입력해주세요' })}
            className="mb-4 h-12 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-black focus:outline-0"
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
          />
          {errors.title && (
            <span>{typeof errors.title.message === 'string' ? errors.title.message : '제목을 입력해주세요'}</span>
          )}
          <textarea
            {...register('content', {
              minLength: { value: 10, message: '최소 10자 이상 입력하세요' },
            })}
            className="h-26 mb-4 w-full rounded-md border border-gray-300 p-3 text-sm focus:border-black focus:outline-0"
            placeholder="문의하실 내용을 입력해주세요."
            name="content"
          />
          {errors.content && (
            <span>{typeof errors.content.message === 'string' ? errors.content.message : '제목을 입력해주세요'}</span>
          )}

          <div className="">
            <div className="relative mb-4 h-20 w-20 rounded-md border-2">
              <input
                {...register('images')}
                type="file"
                id="file"
                name="cardImg"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="h-full w-full border-2 opacity-0"
              ></input>
              <SvgIconPlusMono
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600"
                height={'1.5rem'}
                width={'1.5rem'}
              />
            </div>
            {isImage ? (
              <div className="flex gap-4">
                {imagePreviews.map((preview, index) => (
                  <div className="relative mb-4 h-20 w-20 rounded-md border-2" key={index}>
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
            ) : (
              ''
            )}
          </div>
          <div className="text-xs text-grayscale-300">
            <p>30MB 이하의 이미지만 업로드 가능합니다.</p>
            <p>상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제 될 수 있습니다.</p>
            <p>사진은 최대 8장 등록 가능합니다.</p>
          </div>

          <div className="fixed bottom-0 left-1/2 h-20 w-96 -translate-x-1/2 bg-white p-4">
            <Button type="submit" variant={'primary'} className="h-full w-full">
              등록하기
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
