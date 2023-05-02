import { SVGProps, Ref, forwardRef } from "react";
const SvgCartTick = (
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
    <path
      fill="currentColor"
      d="M8.79 18.81a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16.79 18.81a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.09 5.19h1.73a1.51 1.51 0 0 1 1.49 1.35l.69 7.3a1.5 1.5 0 0 0 1.49 1.35h9.3a1.49 1.49 0 0 0 1.49-1.33l.67-6a1.502 1.502 0 0 0-1.45-1.67H6.28"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.1 10.96 1.78 1.78 3.91-3.91"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCartTick);
export default ForwardRef;
