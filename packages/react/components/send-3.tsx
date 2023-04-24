import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgSend3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5}>
      <path d="m8.69 7.34 7.52 3.77a1 1 0 0 1 0 1.78l-7.52 3.77a1 1 0 0 1-1.35-1.34l1.44-2.87a1 1 0 0 0 0-.9L7.34 8.68a1 1 0 0 1 1.35-1.34Z" />
      <path strokeLinecap="round" d="M9 12h2" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSend3);
export default ForwardRef;
