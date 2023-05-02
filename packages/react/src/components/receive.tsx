import { SVGProps, Ref, forwardRef } from "react";
const SvgReceive = (
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
      <path d="m16.24 7.75-8.48 8.49M11.15 7.75h5.09v5.1" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgReceive);
export default ForwardRef;
