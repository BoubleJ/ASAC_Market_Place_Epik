import type { SVGProps } from 'react'
function SvgShoppingCart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="shopping-cart" {...props}>
      <rect width={256} height={256} fill="none" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={14}
        d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      />
      <circle
        cx={80}
        cy={204}
        r={20}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={14}
      />
      <circle
        cx={184}
        cy={204}
        r={20}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={14}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={14}
        d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
      />
    </svg>
  )
}
export default SvgShoppingCart
