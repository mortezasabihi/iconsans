import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 14H7a2.5 2.5 0 0 0 0 5h10a2.5 2.5 0 0 0 0-5Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser1);
export default ForwardRef;
