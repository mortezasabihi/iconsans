import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCallPlus = (
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
      <path d="M6.47 4.05 5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.22 4.22 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16l-2.24-2.25a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.53 0ZM15 6h5M17.5 3.5v5" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCallPlus);
export default ForwardRef;
