import { EditInfoParams, IEditInfoForm } from '@/types/editinfo'
import { ICheckEmailParams, ICheckUserIdParams } from '@/types/signup'

export const encodeEditInfoForm = (data: IEditInfoForm): EditInfoParams => {
  const { loginId, password, newPassword, newPasswordCheck, memberName, email, phoneNumber } = data.form
  const MemberRequestBody = {
    loginId: loginId,
    password: password,
    newPassword: newPassword,
    newPasswordCheck: newPasswordCheck,
    memberName: memberName,
    email: email,
    phoneNumber: phoneNumber,
  }
  return MemberRequestBody
}

export const encodeCheckUserId = (userId: string): ICheckUserIdParams => {
  const checkUserId = {
    loginId: userId,
  }
  return checkUserId
}

export const encodeCheckEmail = (Email: string): ICheckEmailParams => {
  const checkEmail = {
    email: Email,
  }
  return checkEmail
}
