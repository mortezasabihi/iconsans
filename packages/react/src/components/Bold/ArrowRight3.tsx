import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight3 = (
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
      fill="currentColor"
      d="M16.58 10.41 9.25 6.18A1.83 1.83 0 0 0 6.5 7.77v8.46a1.83 1.83 0 0 0 2.75 1.59l7.33-4.23a1.83 1.83 0 0 0 0-3.18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight3);
export default ForwardRef;
