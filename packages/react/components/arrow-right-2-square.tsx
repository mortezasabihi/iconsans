import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight2Square = (
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
      <path d="M21 17V7a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z" />
      <path d="m10.5 9 3 3-3 3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2Square);
export default ForwardRef;
