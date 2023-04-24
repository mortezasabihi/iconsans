import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="m7.76 16.24 8.48-8.49M12.85 16.24H7.76v-5.09" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
