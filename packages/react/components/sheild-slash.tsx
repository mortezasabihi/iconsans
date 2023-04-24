import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSheildSlash = (
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
      <path d="M7 17a14 14 0 0 1-3-8.7 2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L18 6M20 8.3a14 14 0 0 1-7 12.12L12 21l-1-.58a13.891 13.891 0 0 1-1.62-1.09M21 3 3 21" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSheildSlash);
export default ForwardRef;
