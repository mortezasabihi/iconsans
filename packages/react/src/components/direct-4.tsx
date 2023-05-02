import { SVGProps, Ref, forwardRef } from "react";
const SvgDirect4 = (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m9.72 16.31-2.66-8a1 1 0 0 1 1.26-1.25l8 2.66a1 1 0 0 1 0 1.9l-3 1a1 1 0 0 0-.64.64l-1 3a1 1 0 0 1-1.96.05Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirect4);
export default ForwardRef;
