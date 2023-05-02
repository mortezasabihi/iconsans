import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVerticalRounded = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M16 10.5a5 5 0 1 1 0 10H8a5 5 0 0 1 0-10M11.73 3.5v12M8.13 7.1l3.6-3.6 3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVerticalRounded);
export default ForwardRef;
