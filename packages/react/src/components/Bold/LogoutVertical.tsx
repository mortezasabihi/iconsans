import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVertical = (
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
      d="M21 13.5v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h5v5a.75.75 0 1 0 1.5 0v-5H18a3 3 0 0 1 3 3Zm-5.14-5.87a.74.74 0 0 1-.53.22.71.71 0 0 1-.53-.22l-2.32-2.32v5.19H11V5.31L8.66 7.63A.75.75 0 1 1 7.6 6.57L11.2 3a.67.67 0 0 1 .24-.16.8.8 0 0 1 .57 0 .82.82 0 0 1 .25.16l3.6 3.6a.75.75 0 0 1 0 1.03Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVertical);
export default ForwardRef;
