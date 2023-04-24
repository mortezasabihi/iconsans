import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchTick = (
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
      <path d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM16.5 16.5l3 3" />
      <path d="m9 12.18 1.88 1.88L15 9.94" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSearchTick);
export default ForwardRef;
