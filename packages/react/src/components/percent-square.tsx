import { SVGProps, Ref, forwardRef } from "react";
const SvgPercentSquare = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM10 15.62 14.4 8"
      />
      <path strokeWidth={2} d="M14.2 15.31v.001M10.2 8.31v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPercentSquare);
export default ForwardRef;
