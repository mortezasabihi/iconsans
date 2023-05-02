import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Tick = (
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
      <path d="M11.5 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 20.25H5.94A1.94 1.94 0 0 1 4 18.31v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56M15 15.87l1.57 1.56L20 14" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Tick);
export default ForwardRef;
