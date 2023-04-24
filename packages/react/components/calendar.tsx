import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendar = (
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
      d="M17 4.75H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.75a4 4 0 0 0-4-4ZM8 3.25v3M17 3.25v3M3 9.75h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14v.001M12 14v.001M16 14v.001M8 18v.001M12 18v.001M16 18v.001"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
