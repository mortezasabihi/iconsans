import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchPlus = (
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
      <path d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM16.5 16.5l3 3M9 11.5h5M11.5 9v5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSearchPlus);
export default ForwardRef;
