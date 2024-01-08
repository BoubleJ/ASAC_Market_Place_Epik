import type { SVGProps } from 'react'
function SvgChatbubble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 19 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        id="Vector"
        opacity={0.902}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 0.5C4.52833 0.5 0 4.31088 0 7.53493C0 9.9507 1.64456 12.0816 4.14939 13.3479L3.09594 17.038C3.002 17.3651 3.3915 17.6248 3.69022 17.4366L8.31039 14.5125C8.69989 14.5487 9.09678 14.5699 9.5 14.5699C14.7461 14.5699 19 11.4203 19 7.53493C19 4.31088 14.7461 0.5 9.5 0.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
export default SvgChatbubble
