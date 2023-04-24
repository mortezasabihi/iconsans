import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Cross = (
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
      <path d="M11.11 10.84a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.61 19.09v-3.32a1.94 1.94 0 0 1 1.93-1.93h10.07M17.21 19.16l3.18-3.18M17.21 15.98l3.18 3.18" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Cross);
export default ForwardRef;
