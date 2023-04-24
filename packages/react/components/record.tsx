import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgRecord = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRecord);
export default ForwardRef;
