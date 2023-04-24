import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgHome41 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="m13.5 4.9 6 4v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8l6-4"
      />
      <path
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1"
      />
      <path strokeLinecap="round" strokeWidth={2} d="M12 17v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgHome41);
export default ForwardRef;
