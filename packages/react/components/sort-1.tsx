import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSort1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 16h14M11 12h8M11 8h8M6.8 13V8M8.6 11.2 6.8 13 5 11.2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort1);
export default ForwardRef;
