import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUserCircle1 = (
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
      <path d="M12 13.6A2.8 2.8 0 1 0 12 8a2.8 2.8 0 0 0 0 5.6ZM6.25 18.92v-1.54a1.49 1.49 0 0 1 1.48-1.48h8.54a1.49 1.49 0 0 1 1.48 1.48v1.54" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle1);
export default ForwardRef;
