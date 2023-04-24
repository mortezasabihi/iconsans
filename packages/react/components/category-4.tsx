import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory4 = (
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
      <path d="M8.9 4.5h-3A1.5 1.5 0 0 0 4.4 6v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10.4 9V6a1.5 1.5 0 0 0-1.5-1.5ZM10.4 16.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM17.9 13.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5ZM16.5 4.64 13.4 10h6.2l-3.1-5.36Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCategory4);
export default ForwardRef;
