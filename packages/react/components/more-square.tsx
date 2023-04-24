import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMoreSquare = (
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
        d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMoreSquare);
export default ForwardRef;
