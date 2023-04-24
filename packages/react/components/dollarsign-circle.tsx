import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgDollarsignCircle = (
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
      <path d="M15 9.75v-1.5a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 8.25V9a1.49 1.49 0 0 0 .6 1.2l4.8 3.6A1.49 1.49 0 0 1 15 15v.75a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-1.5M12 5.25v13.5" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDollarsignCircle);
export default ForwardRef;
