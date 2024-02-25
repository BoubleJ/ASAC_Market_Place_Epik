// <input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
//  placeholder = '우편번호'
//  placeholder = '주소'
//  placeholder = '상세주소'
//  placeholder = '참고항목'
import { UseFormReturn } from 'react-hook-form'

import { OrderFormInterface } from '@/lib/schema/order'

// react-hook-form의 useForm의 반환 값(form)을 전달 받아 다음 post api handler를 반환
export const handleDaumPostcode =
  (form: UseFormReturn<OrderFormInterface, any, undefined>) => (data: daum.PostcodeData) => {
    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    let addr = '' // 주소 변수
    let zipcode = data.zonecode

    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress
    }
    // form field 값 설정
    form.setValue('delivery_address.address', addr)
    form.setValue('delivery_address.zipcode', zipcode)

    // form field 포커스 설정
    form.setFocus('delivery_address.detail_address')
  }

export const openDaumPostcode = (form: UseFormReturn<OrderFormInterface, any, undefined>) => {
  new daum.Postcode({
    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
    oncomplete: handleDaumPostcode(form),
  }).open()
}
