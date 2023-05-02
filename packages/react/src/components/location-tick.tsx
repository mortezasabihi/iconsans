import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationTick = (
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
      <path d="M13.61 18.94a1.999 1.999 0 0 1-3.22 0C5.42 12.24 5.82 9 5.82 9a6.18 6.18 0 1 1 12.36 0s.4 3.24-4.57 9.94Z" />
      <path d="M8.87 10.04 10.83 12l4.3-4.3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLocationTick);
export default ForwardRef;
