import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarSearch = (
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
      d="M17.47 20.94a3.31 3.31 0 1 0 0-6.62 3.31 3.31 0 0 0 0 6.62ZM19.84 20l1.42 1.42"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.13 22H6.74a4 4 0 0 1-4-4V8.75a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4M7.74 3.25v3M16.74 3.25v3M2.74 9.75h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.7 14v.001M11.7 14v.001M7.7 18v.001"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarSearch);
export default ForwardRef;
