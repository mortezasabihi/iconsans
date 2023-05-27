import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketTick = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="m4.89 9.83 1.33 8a2 2 0 0 0 2 1.67h7.62a2 2 0 0 0 2-1.67l1.33-8a2.001 2.001 0 0 0-2-2.33H6.86a2 2 0 0 0-1.97 2.33Zm.11.67h13.93M7.5 7.5l2-3m7 3-2-3" />
      <path d="m9.31 15.13 1.78 1.78L15 13" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBasketTick);
export default ForwardRef;
