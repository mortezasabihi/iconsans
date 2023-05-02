import { SVGProps, Ref, forwardRef } from "react";
const SvgAlertSquare = (
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
        d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4ZM12 7v7"
      />
      <path strokeWidth={2} d="M12 17v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAlertSquare);
export default ForwardRef;
