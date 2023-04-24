import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCartPlus = (
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
      fill="currentColor"
      d="M9.25 18.81a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.25 18.81a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.54 5.19h1.73a1.51 1.51 0 0 1 1.5 1.35l.73 7.3A1.49 1.49 0 0 0 9 15.19h9.3a1.5 1.5 0 0 0 1.49-1.33l.67-6A1.5 1.5 0 0 0 19 6.19H6.73M13.54 8.69v4M15.54 10.69h-4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCartPlus);
export default ForwardRef;
