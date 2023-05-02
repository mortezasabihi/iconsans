import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M11 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20.19a7.5 7.5 0 0 1 15 0M18 12.5a6.501 6.501 0 0 1 3 5.5M15.9 4.31a2.5 2.5 0 1 1 0 5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUsers4);
export default ForwardRef;
