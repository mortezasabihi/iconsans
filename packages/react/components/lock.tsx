import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M17 9H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3ZM10.64 3h2.71A1.64 1.64 0 0 1 15 4.64V9H9V4.64A1.64 1.64 0 0 1 10.64 3Z" />
      <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
