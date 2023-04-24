import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSign = (
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
      <path d="M6 9.75h12M6 14.25h12M6 9.75h12M6 14.25h12M14.25 6v12M9.75 6v12M14.25 6v12M9.75 6v12" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSign);
export default ForwardRef;
