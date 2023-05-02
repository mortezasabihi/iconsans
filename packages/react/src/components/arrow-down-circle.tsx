import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownCircle = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17V7" />
      <path d="m15 14-3 3-3-3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownCircle);
export default ForwardRef;
