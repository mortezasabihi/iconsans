import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="m17.657 8.154 2.432 2.432a2 2 0 0 1 0 2.829l-2.432 2.432a8 8 0 0 1-11.314 0l-2.432-2.432a2 2 0 0 1 0-2.829l2.432-2.432a8 8 0 0 1 11.314 0Z" />
      <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
