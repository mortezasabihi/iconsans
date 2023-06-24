import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.47 11.53-3 3a.63.63 0 0 1-.24.16.73.73 0 0 1-.58 0 .63.63 0 0 1-.24-.16l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V7a.75.75 0 1 1 1.5 0v8.19l1.72-1.72a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownSquare);
export default ForwardRef;
