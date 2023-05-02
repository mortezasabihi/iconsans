import { SVGProps, Ref, forwardRef } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M8.5 5.5h-3A1.5 1.5 0 0 0 4 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10 17V7a1.5 1.5 0 0 0-1.5-1.5ZM18.5 5.5h-3A1.5 1.5 0 0 0 14 7v10a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 20 17V7a1.5 1.5 0 0 0-1.5-1.5Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
