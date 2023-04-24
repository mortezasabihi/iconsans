import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Minus = (
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
      <path d="M10.88 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.38 19.12v-3.31a2 2 0 0 1 1.93-1.94h10.07M16.13 16.87h4.5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Minus);
export default ForwardRef;
