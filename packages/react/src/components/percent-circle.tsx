import { SVGProps, Ref, forwardRef } from "react";
const SvgPercentCircle = (
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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM10 15.62 14.4 8"
      />
      <path strokeWidth={2} d="M14.2 15.31v.001M10.2 8.31v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPercentCircle);
export default ForwardRef;
