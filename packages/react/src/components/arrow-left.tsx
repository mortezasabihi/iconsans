import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft = (
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
      <path d="M6 12h12M9.6 15.6 6 12l3.6-3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
