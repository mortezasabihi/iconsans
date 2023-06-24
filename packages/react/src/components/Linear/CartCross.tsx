import { SVGProps, Ref, forwardRef } from "react";
const SvgCartCross = (
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
      d="M9.25 18.81a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.54 5.19h1.73a1.51 1.51 0 0 1 1.5 1.35l.73 7.3A1.49 1.49 0 0 0 9 15.19h9.3a1.5 1.5 0 0 0 1.49-1.33l.67-6A1.5 1.5 0 0 0 19 6.19H6.73m8.23 3.09-2.83 2.83m2.83 0-2.83-2.83"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCartCross);
export default ForwardRef;
