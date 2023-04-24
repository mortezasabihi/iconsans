import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeLow = (
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
      <path d="M5.29 16.5v-9A1.5 1.5 0 0 1 6.79 6h1.89a2 2 0 0 0 1.11-.34L13 3.55a1.5 1.5 0 0 1 2.29 1.25v14.4A1.5 1.5 0 0 1 13 20.45l-3.21-2.11A2 2 0 0 0 8.68 18H6.79a1.5 1.5 0 0 1-1.5-1.5ZM17.68 9.72a3.49 3.49 0 0 1 0 4.95" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeLow);
export default ForwardRef;
