import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown3 = (
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
      d="m13.3 15.75 3.46-6a1.5 1.5 0 0 0-1.3-2.25H8.54a1.5 1.5 0 0 0-1.3 2.25l3.46 6a1.499 1.499 0 0 0 2.6 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown3);
export default ForwardRef;
