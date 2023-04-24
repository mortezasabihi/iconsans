import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M7 12h10M12 7v10" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPlus);
export default ForwardRef;
