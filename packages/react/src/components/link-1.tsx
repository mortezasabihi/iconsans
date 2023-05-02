import { SVGProps, Ref, forwardRef } from "react";
const SvgLink1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M15 8h1a4 4 0 1 1 0 8h-1M9 16H8a4 4 0 1 1 0-8h1M9 12h6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLink1);
export default ForwardRef;
