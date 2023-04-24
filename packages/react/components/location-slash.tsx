import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationSlash = (
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
      <path d="M8 16c-2.43-4.23-2.18-6.28-2.18-6.28A6.18 6.18 0 0 1 17 6.09M18.18 9.72s.4 3.23-4.57 9.93a2 2 0 0 1-3.22 0c-.1-.13-.26-.36-.46-.65" />
      <path d="M12 11.71a2 2 0 1 1 2-2M21 3 3 21" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLocationSlash);
export default ForwardRef;
