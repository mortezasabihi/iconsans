import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVerticalRounded = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M21 15.5a5 5 0 0 1-5 5H8a5 5 0 0 1 0-10h3v5a.75.75 0 1 0 1.5 0v-5H16a5 5 0 0 1 5 5Zm-5.14-7.87a.74.74 0 0 1-.53.22.71.71 0 0 1-.53-.22l-2.32-2.32v5.19H11V5.31L8.66 7.63a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L11.2 3a.67.67 0 0 1 .24-.16.71.71 0 0 1 .57 0 .82.82 0 0 1 .25.16l3.6 3.6a.75.75 0 0 1 0 1.03Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVerticalRounded);
export default ForwardRef;
