import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Minus = (
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
      <path d="M11.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM13.5 19h-7a2.5 2.5 0 0 1 0-5h7M20 16.75h-4.5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Minus);
export default ForwardRef;
