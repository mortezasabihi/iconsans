import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferVerticalSquare = (
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
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="m16.43 10.09-2.86-2.87v9.56M7.57 13.91l2.86 2.87V7.22" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTransferVerticalSquare);
export default ForwardRef;
