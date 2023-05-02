import { SVGProps, Ref, forwardRef } from "react";
const SvgTimer3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 7.67A2.66 2.66 0 0 1 10.67 5h2.66A2.66 2.66 0 0 1 16 7.67a2.66 2.66 0 0 1-1.07 2.13l-5.86 4.4A2.66 2.66 0 0 0 8 16.33 2.66 2.66 0 0 0 10.67 19h2.66A2.659 2.659 0 0 0 16 16.33a2.661 2.661 0 0 0-1.07-2.13L9.07 9.8A2.66 2.66 0 0 1 8 7.67Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer3);
export default ForwardRef;
