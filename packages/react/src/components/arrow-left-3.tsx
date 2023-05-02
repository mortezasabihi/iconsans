import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft3 = (
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
      d="m8.25 13.3 6 3.46a1.5 1.5 0 0 0 2.25-1.3V8.53a1.5 1.5 0 0 0-2.25-1.3l-6 3.47a1.5 1.5 0 0 0 0 2.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft3);
export default ForwardRef;
