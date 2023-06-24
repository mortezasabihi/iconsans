import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft2 = (
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
      d="M14.75 18.25a.741.741 0 0 1-.53-.22l-5.5-5.5a.75.75 0 0 1 0-1.06L14.22 6a.75.75 0 0 1 1.06 1l-5 5 5 5a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.19Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft2);
export default ForwardRef;
