import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAsterisk = (
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
      <path d="m8.46 8.46 7.08 7.08M15.54 8.46l-7.08 7.08M17 12H7M12 17V7" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAsterisk);
export default ForwardRef;
