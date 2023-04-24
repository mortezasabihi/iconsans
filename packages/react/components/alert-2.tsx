import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAlert2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="m10.27 5-6.9 12a2 2 0 0 0 1.73 3h13.8a2 2 0 0 0 1.73-3l-6.9-12a2 2 0 0 0-3.46 0ZM12 8v6"
      />
      <path strokeWidth={2} d="M12 17v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAlert2);
export default ForwardRef;
