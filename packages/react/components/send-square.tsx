import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSendSquare = (
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
      <path d="M21 16.99v-10a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4ZM15.54 8.46l-7.07 7.07" />
      <path d="M11.29 8.46h4.25v4.25" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSendSquare);
export default ForwardRef;
