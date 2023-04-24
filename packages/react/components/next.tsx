import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNext = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M15.12 9.83 8.63 6.08a2.5 2.5 0 0 0-3.75 2.17v7.5a2.5 2.5 0 0 0 3.75 2.17l6.49-3.75a2.51 2.51 0 0 0 0-4.34ZM19.12 6v12" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgNext);
export default ForwardRef;
