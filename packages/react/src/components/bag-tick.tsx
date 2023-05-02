import { SVGProps, Ref, forwardRef } from "react";
const SvgBagTick = (
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
      <path d="m6.14 10.33 1.33 8a2 2 0 0 0 2 1.67h5.12a2 2 0 0 0 2-1.67l1.33-8a2.001 2.001 0 0 0-2-2.33H8.11a2 2 0 0 0-1.97 2.33Z" />
      <path d="M9.6 9V6.4A2.41 2.41 0 0 1 12 4a2.41 2.41 0 0 1 2.4 2.4V9M9.15 14.22 10.94 16l3.91-3.91" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBagTick);
export default ForwardRef;
