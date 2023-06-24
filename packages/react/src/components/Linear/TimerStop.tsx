import { SVGProps, Ref, forwardRef } from "react";
const SvgTimerStop = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 13a8 8 0 1 0-8 8m0-9.78V7.67M10 3h4m1 12v5m3-5v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimerStop);
export default ForwardRef;
