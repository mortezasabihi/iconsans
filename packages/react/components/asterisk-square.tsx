import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgAsteriskSquare = (
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
      <path d="m9.17 9.17 5.66 5.66M14.83 9.17l-5.66 5.66M16 12H8M12 16V8M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAsteriskSquare);
export default ForwardRef;
