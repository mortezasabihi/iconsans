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
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.07 13.07a5.751 5.751 0 1 1-.9-8.86.75.75 0 0 1 1.45.26v1.45a.76.76 0 0 1-.75.75h-1.45A.74.74 0 0 1 14 8.29a4.23 4.23 0 1 0 2.21 3.47.75.75 0 1 1 1.5-.08 5.79 5.79 0 0 1-1.64 4.39Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRotateRight);
export default ForwardRef;
