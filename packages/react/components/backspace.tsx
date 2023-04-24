import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBackspace = (
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
      <path d="m11 9.96 4.07 4.08M15.07 9.96 11 14.04M8 17h10.36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8a2 2 0 0 0-1.56.75l-2.4 3a2 2 0 0 0 0 2.5l2.4 3A2 2 0 0 0 8 17Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBackspace);
export default ForwardRef;
