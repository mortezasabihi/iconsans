import { SVGProps, Ref, forwardRef } from "react";
const SvgSort2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 16H5M13 12H5M13 8H5M17 13V8M15.2 11.2 17 13l1.8-1.8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort2);
export default ForwardRef;
