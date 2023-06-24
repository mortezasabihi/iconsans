import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight = (
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
      d="M18 12H6m8.4-3.6L18 12l-3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
