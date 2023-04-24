import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M10.14 11.1a2.71 2.71 0 1 0 0-5.42 2.71 2.71 0 0 0 0 5.42ZM14.54 6.14a2.26 2.26 0 0 1 0 4.51M14.66 13.8H5.63a2.25 2.25 0 0 0-2.25 2.25v.01a2.25 2.25 0 0 0 2.25 2.25h9.03a2.25 2.25 0 0 0 2.25-2.25v-.01a2.25 2.25 0 0 0-2.25-2.25ZM18.72 14.06a2 2 0 0 1 0 4" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUsers1);
export default ForwardRef;
