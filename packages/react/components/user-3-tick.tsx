import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3Tick = (
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
      <path d="M11.47 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19.12v-3.31a2 2 0 0 1 1.94-1.94H16M15.03 17.43 16.59 19l3.44-3.44" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser3Tick);
export default ForwardRef;
