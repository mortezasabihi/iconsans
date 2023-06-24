import { SVGProps, Ref, forwardRef } from "react";
const SvgCrossSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-2 11a.75.75 0 0 1 0 1 .75.75 0 0 1-1 0l-2-2-2 2a.75.75 0 0 1-1 0 .75.75 0 0 1 0-1l2-2-2-2a.75.75 0 0 1 0-1 .74.74 0 0 1 1 0l2 2 2-2a.74.74 0 0 1 1 0 .75.75 0 0 1 0 1l-2 2 2 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCrossSquare);
export default ForwardRef;
