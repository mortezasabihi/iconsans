import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRightSquare = (
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
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM17 12H7" />
      <path d="m14 9 3 3-3 3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRightSquare);
export default ForwardRef;
