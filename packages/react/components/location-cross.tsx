import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationCross = (
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
      <path d="M13.61 19.65a1.999 1.999 0 0 1-3.22 0c-5-6.7-4.57-9.93-4.57-9.93a6.18 6.18 0 0 1 12.36 0s.4 3.28-4.57 9.93ZM13.41 8.3l-2.82 2.83M13.41 11.13 10.59 8.3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLocationCross);
export default ForwardRef;
