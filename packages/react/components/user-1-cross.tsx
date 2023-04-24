import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Cross = (
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
      <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 19H7a2.5 2.5 0 0 1 0-5h7M20 18l-3.18-3.18M16.82 18 20 14.82" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Cross);
export default ForwardRef;
