import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuMeatballs = (
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
      d="M18 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuMeatballs);
export default ForwardRef;
