import { SVGProps, Ref, forwardRef } from "react";
const SvgTickCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 7.12-4.81 4.81a.73.73 0 0 1-.53.22.74.74 0 0 1-.53-.22L8 12.74a.75.75 0 0 1 1-1.06l1.66 1.66L15 9.06a.75.75 0 0 1 1 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTickCircle);
export default ForwardRef;
