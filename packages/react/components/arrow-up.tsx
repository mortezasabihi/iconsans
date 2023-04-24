import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp = (
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
      <path d="M12 6v12M8.4 9.6 12 6l3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
