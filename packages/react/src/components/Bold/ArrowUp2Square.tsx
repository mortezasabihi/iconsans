import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp2Square = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.47 11a.75.75 0 0 1-1.06 0L12 11.56 9.53 14a.75.75 0 0 1-1.06-1l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp2Square);
export default ForwardRef;
