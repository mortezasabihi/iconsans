import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUpSquare = (
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
      <path d="M3 7v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4ZM12 7v10" />
      <path d="m9 10 3-3 3 3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUpSquare);
export default ForwardRef;
