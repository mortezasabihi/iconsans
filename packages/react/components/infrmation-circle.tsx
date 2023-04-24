import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgInfrmationCircle = (
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
      <path
        strokeWidth={1.5}
        d="M12 17v-7M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      />
      <path strokeWidth={2} d="M12 7v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgInfrmationCircle);
export default ForwardRef;
