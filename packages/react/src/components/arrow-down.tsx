import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown = (
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
      <path d="M12 18V6M15.6 14.4 12 18l-3.6-3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
