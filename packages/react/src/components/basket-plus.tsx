import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketPlus = (
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
      <path d="m4.75 9.83 1.33 8a2 2 0 0 0 2 1.67h7.62a2 2 0 0 0 2-1.67l1.33-8A2 2 0 0 0 17 7.5H6.72a2 2 0 0 0-1.97 2.33ZM12 13v4M14 15h-4M4.86 10.5h13.93M7.36 7.5l2-3M16.36 7.5l-2-3" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBasketPlus);
export default ForwardRef;
