import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUserCircle2 = (
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 12.62A2.81 2.81 0 1 0 12 7a2.81 2.81 0 0 0 0 5.62ZM5.91 18.63a7.5 7.5 0 0 1 12.18 0" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle2);
export default ForwardRef;
