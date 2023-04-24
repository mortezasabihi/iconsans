import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgShuffle = (
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
      <path d="m17.58 8.7 1.84-1.85L17.58 5" />
      <path d="M4.58 16h.79a6 6 0 0 0 5-2.67l2.43-3.66a6 6 0 0 1 5-2.67h.79M17.58 14.31l1.84 1.84L17.58 18" />
      <path d="M13.32 14a6 6 0 0 0 4.47 2h.79M4.58 7h.79a6 6 0 0 1 4.47 2" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgShuffle);
export default ForwardRef;
