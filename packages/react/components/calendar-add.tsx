import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarAdd = (
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
      d="M15.37 21.14H6.3a4 4 0 0 1-4-4V7.89a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5.87M7.3 2.39v3M16.3 2.39v3M2.3 8.89h18M17.35 15.73v3.07M18.89 17.26h-3.07"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.35 21.61a4.35 4.35 0 1 0 0-8.7 4.35 4.35 0 0 0 0 8.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.3 13.15v.001M11.3 13.15v.001M7.3 17.15v.001"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarAdd);
export default ForwardRef;
