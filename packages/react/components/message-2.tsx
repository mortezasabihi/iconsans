import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMessage2 = (
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
        d="M19.39 13a7.52 7.52 0 0 1-9.58 5.76.94.94 0 0 0-.64 0L6.67 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81 7.52 7.52 0 1 1 13-3.55l.02.01Z"
      />
      <path strokeWidth={2} d="M9 11.5v.001M12 11.5v.001M15 11.5v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMessage2);
export default ForwardRef;
