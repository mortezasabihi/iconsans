import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuHamburger = (
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
      d="M5 8h14M5 12h14M5 16h14"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuHamburger);
export default ForwardRef;
