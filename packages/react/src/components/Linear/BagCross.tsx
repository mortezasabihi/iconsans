import { SVGProps, Ref, forwardRef } from "react";
const SvgBagCross = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.14 10.33 1.33 8a2 2 0 0 0 2 1.67h5.12a2 2 0 0 0 2-1.67l1.33-8a2.001 2.001 0 0 0-2-2.33H8.11a2 2 0 0 0-1.97 2.33Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.6 9V6.4A2.41 2.41 0 0 1 12 4a2.41 2.41 0 0 1 2.4 2.4V9m-.99 3.59-2.82 2.82m2.82 0-2.82-2.82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBagCross);
export default ForwardRef;
