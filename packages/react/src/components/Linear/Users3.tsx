import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5.07 13.87H16.2a2 2 0 0 1 1.94 1.94v3.31m-7.5-8.24a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.14 19.12v-3.31a2 2 0 0 1 1.93-1.94H16.2a2 2 0 0 1 1.94 1.94v3.31M15.57 5.38a2.5 2.5 0 0 1 0 5M18.44 12H19a1.85 1.85 0 0 1 1.84 1.84V17"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers3);
export default ForwardRef;
