import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgVideoSlash = (
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
      <path d="M7 19H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2M22 8v8.9a1.2 1.2 0 0 1-2.05.85L16 13.8V16a3 3 0 0 1-3 3h-2M22 4 4 22" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgVideoSlash);
export default ForwardRef;
