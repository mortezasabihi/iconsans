import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Tick = (
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
      <path d="M15 17.44 16.57 19 20 15.57M11.5 9.65a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a7.49 7.49 0 0 1 11.5-6.34" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Tick);
export default ForwardRef;
