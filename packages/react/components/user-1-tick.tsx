import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Tick = (
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
      <path d="M11.03 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM13 19H6a2.51 2.51 0 0 1-2.5-2.5A2.51 2.51 0 0 1 6 14h7M15.47 16.43 17.03 18l3.44-3.44" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Tick);
export default ForwardRef;
