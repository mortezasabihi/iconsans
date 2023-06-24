import { SVGProps, Ref, forwardRef } from "react";
const SvgRotateRight = (
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
      d="M21 11.5a9 9 0 1 1-2.63-5.86"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.96 3.84v2.61h-2.61"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRotateRight);
export default ForwardRef;
