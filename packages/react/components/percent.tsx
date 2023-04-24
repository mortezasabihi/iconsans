import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgPercent = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path strokeWidth={1.5} d="m9 16.76 5.5-9.52" />
      <path strokeWidth={2} d="M9 7v.001M15 17v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPercent);
export default ForwardRef;
