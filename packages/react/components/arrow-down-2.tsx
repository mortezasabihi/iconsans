import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown2 = (
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
      d="m17 9.5-5 5-5-5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown2);
export default ForwardRef;
