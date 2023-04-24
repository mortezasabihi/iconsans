import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 11.22V7.67M10 3h4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
