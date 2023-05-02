import { SVGProps, Ref, forwardRef } from "react";
const SvgPlusCircle = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.5 12h7M12 8.5v7" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPlusCircle);
export default ForwardRef;
