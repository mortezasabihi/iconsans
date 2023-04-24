import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory5 = (
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
      <path d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM18 4.5h-3A1.5 1.5 0 0 0 13.5 6v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 19.5 9V6A1.5 1.5 0 0 0 18 4.5ZM9 13.5H6A1.5 1.5 0 0 0 4.5 15v3A1.5 1.5 0 0 0 6 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 13.5ZM19.5 16.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCategory5);
export default ForwardRef;
