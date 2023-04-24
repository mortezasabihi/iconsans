import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight = (
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
      <path d="M18 12H6M14.4 8.4 18 12l-3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
