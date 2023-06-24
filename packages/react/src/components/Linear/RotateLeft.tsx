import { SVGProps, Ref, forwardRef } from "react";
const SvgRotateLeft = (
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
      d="M3 11.5a9 9 0 1 0 2.64-5.86"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.04 3.84v2.61h2.61"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRotateLeft);
export default ForwardRef;
