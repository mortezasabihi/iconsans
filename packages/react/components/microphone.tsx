import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMicrophone = (
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
      <path d="M15.5 5.5a3.5 3.5 0 1 0-7 0v5a3.5 3.5 0 1 0 7 0v-5Z" />
      <path d="M18.5 10.5a6.5 6.5 0 1 1-13 0M12 17v5M11 5h2M11 8h2" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
