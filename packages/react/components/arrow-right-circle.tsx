import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRightCircle = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM17 12H7" />
      <path d="m14 9 3 3-3 3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRightCircle);
export default ForwardRef;
