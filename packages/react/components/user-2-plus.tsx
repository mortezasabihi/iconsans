import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Plus = (
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
      <path d="M11.5 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 20H5.94A1.94 1.94 0 0 1 4 18.06v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56M17.75 18.5V14M15.5 16.25H20" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Plus);
export default ForwardRef;
