import { SVGProps, Ref, forwardRef } from "react";
const SvgSearch2 = (
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
      d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 7.5a4 4 0 0 1 4 4m1 5 3 3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch2);
export default ForwardRef;
