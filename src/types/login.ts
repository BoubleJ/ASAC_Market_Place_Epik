export interface ILoginParams {
  loginId: string
  password: string
}

export interface IVerifyAndUpdateSocialLoginParams {
  password: string
  email: string
  provider: string
  providerId: string
}
