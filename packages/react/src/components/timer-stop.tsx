import { SVGProps, Ref, forwardRef } from "react";
const SvgTimerStop = (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 13a8 8 0 1 0-8 8M12 11.22V7.67M10 3h4M15 15v5M18 15v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimerStop);
export default ForwardRef;
