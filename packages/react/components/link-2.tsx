import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLink2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M7.64 18.24a3 3 0 0 1-3.42-4.83l5.66-5.65a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24L12 14.12" />
      <path d="M16.36 5.76a3 3 0 0 1 3.42 4.83l-5.66 5.65a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24L12 9.88" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLink2);
export default ForwardRef;
