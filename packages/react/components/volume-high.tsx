import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeHigh = (
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
      <path d="M2.44 16.5v-9A1.5 1.5 0 0 1 3.94 6h1.9A2 2 0 0 0 7 5.66l3.16-2.11a1.5 1.5 0 0 1 2.28 1.25v14.4a1.5 1.5 0 0 1-2.33 1.25L7 18.34A2 2 0 0 0 5.84 18h-1.9a1.5 1.5 0 0 1-1.5-1.5ZM14.84 9.72a3.49 3.49 0 0 1 0 4.95M16.86 7.69a6.36 6.36 0 0 1 0 9" />
      <path d="M18.86 5.69a9.19 9.19 0 0 1 0 13" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeHigh);
export default ForwardRef;
