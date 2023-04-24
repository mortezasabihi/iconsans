import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgBackward = (
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
      <path d="M12.84 13.46 17.22 16a1.68 1.68 0 0 0 2.53-1.46V9.47A1.68 1.68 0 0 0 17.22 8l-4.38 2.53a1.69 1.69 0 0 0 0 2.93Z" />
      <path d="M5.09 13.46 9.47 16A1.68 1.68 0 0 0 12 14.53V9.47A1.68 1.68 0 0 0 9.47 8l-4.38 2.54a1.69 1.69 0 0 0 0 2.92Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBackward);
export default ForwardRef;
