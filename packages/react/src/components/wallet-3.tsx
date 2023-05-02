import { SVGProps, Ref, forwardRef } from "react";
const SvgWallet3 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M18 5.5H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Z" />
      <path d="M17.25 9.75H21v4.5h-3.75a2.25 2.25 0 0 1 0-4.5ZM7 9h3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgWallet3);
export default ForwardRef;
