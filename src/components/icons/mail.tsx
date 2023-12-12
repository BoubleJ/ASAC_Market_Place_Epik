import type { SVGProps } from 'react'
import * as React from 'react'
function SvgMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="mail">
        <path
          id="Icon"
          d="M18.3334 4.99967C18.3334 4.08301 17.5834 3.33301 16.6667 3.33301H3.33341C2.41675 3.33301 1.66675 4.08301 1.66675 4.99967M18.3334 4.99967V14.9997C18.3334 15.9163 17.5834 16.6663 16.6667 16.6663H3.33341C2.41675 16.6663 1.66675 15.9163 1.66675 14.9997V4.99967M18.3334 4.99967L10.0001 10.833L1.66675 4.99967"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export default SvgMail
