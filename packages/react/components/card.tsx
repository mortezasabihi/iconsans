import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        d="M18 6H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
      />
      <path d="M3 11h18" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
