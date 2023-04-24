import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEmailNew = (
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
      <path d="M22 10v6.6a3.41 3.41 0 0 1-3.4 3.4H5.4A3.41 3.41 0 0 1 2 16.6V7.4A3.41 3.41 0 0 1 5.4 4H16" />
      <path d="m6 9 4.84 3.17a2 2 0 0 0 2.32 0L18 9M20.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgEmailNew);
export default ForwardRef;
