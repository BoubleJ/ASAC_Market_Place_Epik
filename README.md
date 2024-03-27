# 🍎 식품 및 생활용품 이커머스 플랫폼 Market Place
 

<img src="https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/d3600fc0-15c6-4e01-b3be-f0e702eb4c74" width="40%" height="500px" alt="RubberDuck"></img>

[서비스 링크](https://marketplace-asac-3rd.vercel.app/recommendations)

<br>
<br>




## 프로젝트 소개
- 모바일 화면 기반 식품 및 생활용품 이커머스 플랫폼입니다. 
- 마켓 컬리를 표본으로 삼고 실제 플랫폼과 유사한 기능 구현을 목적으로 제작했습니다.
- sns로그인, 결제 프로세스, 후기 작성 등 기능을 사용할 수 있습니다.

<br>
<br>

## 프로젝트 개요
> ASAC T아카데미 풀스택 과정 팀프로젝트
> 
> 기간 : 2023-12 ~ 2024-02 (약 3**개월**)
> 
> 
>
> **인원** : 프론트엔드(3명) : 현승재, 변재정, 이윤지 / 백엔드(1명) : 신준영


<br>
<br>

**본인 담당 개발 파트**
- 후기, 문의사항 작성 및 이미지 업로드 
- 회원 가입 및 개인정보 수정
- 상품 검색 및 검색어 자동완성
- 장바구니 상품 결제 프로세스 구현

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/ca1a7689-7ba1-4082-aa77-e841c564aa11)



<br>
<br>


### Stacks(프론트엔드)
`Next.JS`

- 다양한 rendering 패턴(CSR, SSR, ISR, SSG)을 제공하며 프로젝트 협업에 적합
- CSR SSR ISR SSG등 다양한 rendering 패턴을 제공하는 React framework로 프로젝트 협업에 적합
- 폴더 기반 라우팅, SEO, 확장된 fetch caching, Middleware Cookie 등 다양한 기능 지원


 `Typescript`

 - 안정적인 개발과 높은 수준의 코드 품질을 유지
 - 손쉽게 버그를 예방할 수 있는 
 - 강력한 타입 시스템 기반 컴파일, 버그 예방 및 손쉬운 디버깅
 - 높은 생산성과 호환성


`Shadcn/ui`

- Radix UI와 ARIA design system으로 Web Accessibility 제공 가능
- 기본 스타일 제공 및 디자인 시스템, 스타일 커스텀 적용 가능
- 필요한 UI 컴포넌트만 설치하여 번들 사이즈 최적화



 `Zustand`
 
- 작은 번들 사이즈 
- 여타 다른 전역 상태관리 라이브러리 대비 적은 보일러 플레이드 코드로 팀의 러닝 커브를 낯추어 빠르게 도입 가능
- provider 가 필요하지 않아 불필요한 리렌더링 방지
- redux devtools 적용 가능

 
 `Vercel`
 
- Nextjs 배포에 최적화된 배포 플랫폼
- 빌트인 CI/CD, Live Preview, Analytics, 사이트 성능 측정 제공


 
 `react-hook-form + zod`

- 런타임 환경에서 각각의 폼에 대한 스키마구성 및 동적 타입 검증 가능
- 각 Form마다 구조적인 검증 Schema 관리 필요
- 비제어 컴포넌트 기반 폼으로 리렌더링 최소화
- 번들 사이즈가 매우 작고 지속적인 업데이트 중


<br>
<br>

### 서비스 아키텍쳐
![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/7c6736f8-de6b-4237-a23f-277510163dd2)

<br>
<br>

### 와이어프레임 및 화면설계서


- 본 프로젝트 개발에 앞서 기획자와 디자이너로부터 정리된 와이어프레임과 화면설계서를 전달받은 후 개발을 진행했습니다. [피그마 링크](https://www.figma.com/file/jKT3ZuSmjl9qmYqNRZb3mk/%5B%EA%B7%B8%EB%A6%BF%EC%A7%80%ED%85%8C%EC%8A%A4%ED%8A%B8%5D%EB%A7%88%EC%BC%93%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4-%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC?type=design&node-id=24-1283&mode=design&t=qcmZLPG54BEtTvvf-0s)
- 디자인 시스템 및 Typography 글자 및 배경 색깔, 모달, 글씨 크기 등 → CSS 공통화 작업
- 화면설계서를 통한 Userflow 정의

<br><br>

<details>

<summary>디자인 시스템 & 화면 설계서</summary>

<div markdown="1">

**디자인 시스템**

<br>

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/18baabe8-a0b2-40da-8b7c-b0f1b43f13d8)

<br>
<br>

**화면설계서 : Userflow 정의**
<br>
![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/60079642-6e34-4ed3-a41b-b4a06d3966f5)


<br>

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/2aa89cbf-9c21-45fb-8e58-cc17308c70f6)



<br>


</div>

</details>


<br>
<br>

### Key Features

- **로그인** : 일반로그인, 소셜로그인
- **회원가입**
- **홈 화면** : 추천 탭, 카테고리, 카테고리 세부
- **검색하기**
- **상품 상세페이지**
- **후기 조회** - **후기 작성**
- **장바구니** - **주문서** - **주문 완료** - **주문 내역**
- **마이마켓** : 찜한 상품, 상품 문의, 1:1 문의
- **개인정보 수정**
- **로그아웃**
  





<br>

<details>

<summary>ERD 다이어그램</summary>

<div markdown="1">

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/5dd08587-7c19-4e87-9d6d-c3f53afe2c2f)

</div>

</details>






<br>
<br>


## 화면 구성 및 주요 기능 시현 영상 및 설명

### 회원가입 및 로그인
- 일반 이메일 회원가입
- 회원가입 시 많은 입력 폼에 React Hook Form 비제어 컴포넌트로 리렌더 감소, Zod 통한 런타임 타입 검증
- 로그인이 필요한 페이지 및 API 사용 시 Middleware 를 통해 쿠키 내 로그인 토큰 존재여부로 접근 제한

![회원가입 및 로그인 구현 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/ce7a8022-7fd3-43ac-865d-c5e5ed3b7d6d)


<br>


### SNS 로그인 
- OAuth2 인증을 통한 카카오 계정 로그인 구현
- OAuth2 인증 및 추가 정보만으로, 일반 이메일 계정을 카카오 계정과 바로 연동 가능
- **OAuth Cookie 설정** : 일반 로그인 시 백엔드가 프론트엔드한테 JWT를 QueryString 으로 넘긴 다음에 프론트엔드 미들웨어에서 QueryString으로 전달된 JWT를 추출하고 브라우저 Cookie 에 저장하여 “인증이 필요한 API” 호출 시 해당 JWT값 제공.

![카카오 로그인 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/ce647a09-e28c-4a19-86b9-99bedd8e1624)



<br>

### 홈 탭을 통해 원하는 상품군 조회 가능
- 네비게이터 : 추천, 신상품, 베스트 상품으로 바로 이동 가능한 메뉴 나열 (레이아웃과 페이지를 분리)
- *Next.js - App Routing (Layout / Page) 활용*
- 이벤트 배너 및 가로 스크롤을 통해 **다양한 상품 큐레이션**
- **Intersection Observer** 를 통한 **Viewport 위치를 추적**하여 상품 리스트 검색 결과를 **무한 스크롤**로 구현
![Marketplace-feature2online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/44920fd0-8255-4da5-8f16-f0c637eae60b)




<br>


### 카테고리 탭을 통해 카테고리 별 상품군 조회 가능
- [ **대분류 카테고리 → 소분류 카테고리 → 브랜드, 가격 등의 필터** ] **3 계층**을 통해 상세 검색 및 조회 지원
- *shadcn/ui - Accordion 컴포넌트 및 Next.js - Dynamic Routes 활용*
- 하단 메뉴 이동 탭 내 useSelectedLayout 로 App Route Group 값 기반의 현재 위치한 메뉴 아이콘 표기

![Marketplace-feature3online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/e81d0b81-7a91-48dd-a6bc-c854e00080a1)





<br>


###  상품 상세페이지 내 찜하기, 리뷰조회 가능
- 상품 상세페이지 내 해당 상품을 구매한 이들의 **리뷰와 리뷰가 얼마나 도움이 되었는지 여부 판단 가능**
- 상품 상세페이지에 관심이 있는 경우 **찜하기를 통해 추후 구매 고려 및 관련 상품 추천받기 가능**
- 장바구니 및 찜 버튼을 레이아웃으로 분리하여 하단에 고정
- 개인화된 작업 수행의 경우 쿠키 내 인증 토큰을 활용하여, 회원에 한하여 기능 사용 가능하도록 제약
- *Next.js - App Routing (Layout / Page) 및 HTTP Cookie 활용*

![Marketplace-feature6online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/7fc84db6-17bb-4495-9a39-5b9ec9081d20)





<br>

### 상품리스트 필터링 조회
- shadcn/ui 의 accordion 컴포넌트를 사용해 대분류 카테고리 클릭시 아코디언으로 소분류 카테고리를 노출시켜 편리하게 카테고리별로 조회 가능
- 카테고리 결과페이지 접근 시 next.js 의 Dynamic Routes를 사용해 원하는 카테고리 클릭 시 동적으로 라우트를 생성할 수 있도록 했습니다.
- 필터 또는 세부필터 버튼을 터치하면 나타나는 바텀시트를 활용하여 필터 구현
- 각 필터종류별로 원하는 옵션을 선택하여 적용 시 URL 파라미터를 통해 상품을 필터링하고, 버튼을 통해 적용된 필터를 시각적으로 표시하며 이를 클릭 시 해당 옵션 제거할 수 있도록 했습니다.
- **브랜드, 가격 등의 필터와 바텀시트**를 통해 상세 검색 및 조회 지원
- *Next.js - Dynamic Routes 활용*
  
![상품리스트 필터링 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/c0562d84-ca03-4552-857e-01b74f7566f2)



<br>


### 검색 탭을 통해 원하는 상품 조회 가능
- 추천 및 급상승 API를 활용해 버튼을 생성하여 클릭시 해당 키워드로 빠르게 검색 가능하도록 했습니다.
- 유저가 **검색어 입력 시 자동완성** API 를 호출하여 관련 검색어를 노출하여 원하는 **검색을 쉽게할 수 있게 개선**
- 키워드 검색 시 next.js 의 Dynamic Routes를 사용해 검색어에 따라 동적으로 라우트를 생성할 수 있도록 했습니다.
- **검색어 입력 시 자동완성 API 연결**을 통해 (지연시간 최소화) **빠른 검색 가능**
- **추천 검색어 & 급상승 검색어**를 통해 많은 사람들이 찾는 상품에 대한 접근 가능
- *Next.js - Dynamic Routes 활용 (**검색어에 따른 URL 변경** → 예시를 통해 확인 가능)*
  

![Marketplace-feature4online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/b348b5c9-109c-4aa7-a8ff-d9b0ed24ff8b)



  




<br>


### 마이페이지 내 개인정보수정, 주문내역 조회 및 리뷰작성 가능
- 로그인 여부를 판단하여, **회원가입 유도 버튼 노출** 혹은 마이메뉴 페이지 노출 및 개인정보 수정 가능
- 개인화된 작업 수행의 경우 **쿠키 내 인증 토큰을 활용**하여, 회원에 한하여 기능 사용 가능하도록 제약
- *shadcn/ui - Form 컴포넌트 및 HTTP Cookie 활용*
- **찜한 상품 조회 및 삭제 가능**
- **결제 완료 후 주문내역 내 기간 별 주문내역 조회 및 필터링 가능**
- *Next.js - Dynamic Routes 활용 (**세부 필터에 따른 URL 변경** → 예시를 통해 확인 가능)*
- 주문내역 내 특정 주문한 상품에 대해 **이미지 및 글 작성을 통해 리뷰 작성 가능**
- *AJAX 호출 시 Formdata 활용*
 
![Marketplace-feature8online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/d78eb393-a2d3-41de-9186-3595f9673b3c)


 <br>


### 주소입력 및 결제
- **장바구니를 통해 잠재적 구매 상품에 대한 수량 조절 및 선택적 결제 가능**
- *Intl 라이브러리 포맷을 통해 i18n 시간 및 화폐 표현*
- *Zustand 전역 상태 관리 라이브러리를 통한 장바구니 및 구매하기 상품 저장*
- 주문 페이지 배송 주소 입력을 위해서 **daum post api** 사용
- **결제하기 내 주문서 기입** - 주문상품 및 구매자 정보 확인 및 최종 결제 가능
- 외부 API **Portone**을 활용한 카카오페이 결제 기능 구현
  
![결제 프로세스 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/5f62b81a-1c18-4806-941f-86ecd8898cf4)


<br>
<br>
<br>



## 트러블 슈팅
- 아이콘 사용시 react icon을 사용했으나 **번들사이즈 축소**를 위해 **svgr로 마이그레이션**
  **8.15 MB (react-icons)  334.5KB (svgr)의 번들링 사이즈 개선**을 달성
- 렌딩 페이지 배너 이미지를 lazy-loading 방식에서 **preload 방식**으로 변경
   **라이트하우스 성능 메트릭 78점 -> 97점 개선 달성**
- [트러블 슈팅 과정 기록 노션 링크](https://supreme-gram-307.notion.site/b609d241afe34994b9776ed29b7db2d3)


