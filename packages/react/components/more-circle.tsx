import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMoreCircle = (
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
    <g stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12v.001M16 12v.001M8 12v.001"
      />
      <path
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMoreCircle);
export default ForwardRef;
