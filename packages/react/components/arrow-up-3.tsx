import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp3 = (
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
      d="m10.7 8.25-3.46 6a1.5 1.5 0 0 0 1.3 2.25h6.92a1.5 1.5 0 0 0 1.3-2.25l-3.46-6a1.5 1.5 0 0 0-2.6 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp3);
export default ForwardRef;
