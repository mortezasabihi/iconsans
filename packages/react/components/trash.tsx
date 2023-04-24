import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="m6 9.13.75 9a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2l.75-9M13.5 12.63v4.49M10.5 12.63v4.49M5 6.88h14M14.5 6.88v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
