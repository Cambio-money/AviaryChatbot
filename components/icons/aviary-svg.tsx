import { FC } from "react"

interface AviaryUISVGProps {
  scale?: number
}

export const AviarySVG: FC<AviaryUISVGProps> = ({ scale = 1 }) => {
  return (
    <svg
      width={100 * scale}
      height={101 * scale}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.231 0H.001l19.776 20.613H4.457l9.192 10.028L2.23 89.823l90.86 11.013L69.08 63.789l18.663-10.585 3.342-23.956L84.68 17.27 63.23 0Z"
        fill="url(#a)"
      />
      <path
        d="M63.231 0H.001l19.776 20.613H4.457l9.192 10.028L5.26 74.415l87.829 26.421L69.08 63.789l18.663-10.585 3.342-23.956L84.68 17.27 63.23 0Z"
        fill="url(#b)"
      />
      <path
        d="M63.231 0H.001l19.776 20.613H4.457l9.192 10.028 79.44 70.195L69.08 63.789l18.663-10.585 3.342-23.956L84.68 17.27 63.23 0Z"
        fill="url(#c)"
      />
      <path
        d="M63.23 0H0l19.777 20.613L69.08 63.788l18.663-10.584 3.343-23.956-6.407-11.978L63.231 0Z"
        fill="url(#d)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.403 48.483.052 0h63.18l21.449 17.27 6.406 11.978-2.684 19.235Z"
        fill="#F46E6E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.403 48.483.052 0h63.18l21.449 17.27 6.406 11.978-2.684 19.235Z"
        fill="url(#e)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.133 0h.1L84.68 17.27l6.406 11.978L88.2 53.107l-9.33 5.132L63.132 0Z"
        fill="#F58C8C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.133 0h.1L84.68 17.27l6.406 11.978L88.2 53.107l-9.33 5.132L63.132 0Z"
        fill="url(#f)"
      />
      <path
        d="m100 48.469-8.914-19.22-17.004 11.384L88.2 53.107l5.394 13.189L100 48.469Z"
        fill="#EB4E4E"
      />
      <path
        d="m100 48.469-8.914-19.22-17.004 11.384L88.2 53.107l5.394 13.189L100 48.469Z"
        fill="url(#g)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={-1.766}
          y1={134.176}
          x2={68.409}
          y2={65.955}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={75.487}
          y1={115.042}
          x2={6.685}
          y2={3.622}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={19.498}
          y1={12.257}
          x2={91.086}
          y2={109.471}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={24.791}
          y1={-5.849}
          x2={71.587}
          y2={66.574}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={75.404}
          y1={44.345}
          x2={-7.065}
          y2={-62.246}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={57.94}
          y1={-95.544}
          x2={87.468}
          y2={100.001}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
        <linearGradient
          id="g"
          x1={87.047}
          y1={29.249}
          x2={87.047}
          y2={66.296}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0444C1" />
          <stop offset={1} stopColor="#79D7F7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default AviarySVG
