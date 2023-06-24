import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft3 = (
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
      d="m7.42 13.59 7.33 4.23a1.83 1.83 0 0 0 2.75-1.59V7.77a1.83 1.83 0 0 0-2.75-1.59l-7.33 4.23a1.83 1.83 0 0 0 0 3.18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft3);
export default ForwardRef;
