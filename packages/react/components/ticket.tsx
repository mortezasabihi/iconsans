import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M14 6v2M14 11v2.5M14 16v2M3 10V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2a2 2 0 0 0 0 4h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2a2 2 0 1 0 0-4H3Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTicket);
export default ForwardRef;
