import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTimerStart = (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 13a8 8 0 1 0-8 8M11 11.22V7.67M9 3h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.55 16.22-3.64-2.1a.91.91 0 0 0-1.37.79v4.2a.91.91 0 0 0 1.37.79l3.64-2.1a.92.92 0 0 0 0-1.58Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimerStart);
export default ForwardRef;
