import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuHotdog = (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 16h8M5 12h14M8 8h8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuHotdog);
export default ForwardRef;
