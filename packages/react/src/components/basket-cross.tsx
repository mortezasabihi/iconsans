import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketCross = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="m4.89 9.83 1.33 8a2 2 0 0 0 2 1.67h7.62a2 2 0 0 0 2-1.67l1.33-8a2.001 2.001 0 0 0-2-2.33H6.86a2 2 0 0 0-1.97 2.33ZM13.55 13.59l-2.82 2.82M13.55 16.41l-2.82-2.82M5 10.5h13.93M7.5 7.5l2-3M16.5 7.5l-2-3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBasketCross);
export default ForwardRef;
