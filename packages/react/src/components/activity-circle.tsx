import { SVGProps, Ref, forwardRef } from "react";
const SvgActivityCircle = (
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
      <path d="m7 14.14 2.21-2.83a1.42 1.42 0 0 1 2.25 0l1.08 1.38a1.42 1.42 0 0 0 2.25 0L17 9.86" />
      <path d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgActivityCircle);
export default ForwardRef;
