import { fetchMember } from '@/api/resource/member'
import { User } from '@/components/icons'

export default async function ConnectInfo() {
  const member = await fetchMember()
  let isLoggedIn = true
  console.log(member)
  if (member.errorMessage) {
    console.log(member.errorMessage)
    isLoggedIn = false
  }
  return (
    <section className="p-5">
      <div className="flex flex-col gap-[10px] justify-between items-start">
        <span className="text-body-lg">이미 가입된 회원 정보가 있습니다.</span>
        <span className="text-body-sm text-gray-600">
          아이디 확인 후 비밀번호를 입력하시면 기존 회원으로 서비스 사용이 가능합니다.
        </span>
        <div className="flex items-center gap-[9px]">
          <div className="flex justify-center items-center bg-grayscale-50 rounded-lg w-12 h-12">
            <User
              width={'1.625rem'}
              height={'1.625rem'}
              className="fill-grayscale-200 stroke-grayscale-200 text-grayscale-200"
            />
          </div>
          {isLoggedIn ? (
            <span className="text-body-lg">ID: {member.memberName}</span>
          ) : (
            <span className="text-body-lg">등록된 ID를 불러오지 못하였습니다.</span>
          )}
        </div>
      </div>
    </section>
  )
}
