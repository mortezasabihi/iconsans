import { SVGProps, Ref, forwardRef } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M13.5 16v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2M20.5 11.73h-12M16.9 8.13l3.6 3.6-3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
