import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m6 11.74 6.56-8.19a1 1 0 0 1 1.78.62V10a1 1 0 0 0 1 1h1.89a1 1 0 0 1 .77 1.53l-5.5 7.87a1 1 0 0 1-1.82-.57v-5.46a1 1 0 0 0-1-1h-2.9A1 1 0 0 1 6 11.74Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFlash);
export default ForwardRef;
