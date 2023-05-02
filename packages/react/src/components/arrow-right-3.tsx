import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight3 = (
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
      d="m15.75 10.7-6-3.47a1.5 1.5 0 0 0-2.25 1.3v6.93a1.5 1.5 0 0 0 2.25 1.3l6-3.46a1.499 1.499 0 0 0 0-2.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight3);
export default ForwardRef;
