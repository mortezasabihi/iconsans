import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M5.21 13.87h11.13a2 2 0 0 1 1.93 1.94v3.31M10.77 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3.27 19.12v-3.31a2 2 0 0 1 1.94-1.94h11.13a2 2 0 0 1 1.93 1.94v3.31M15.71 5.38a2.5 2.5 0 0 1 0 5M18.57 12h.58A1.85 1.85 0 0 1 21 13.84V17" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUsers3);
export default ForwardRef;
