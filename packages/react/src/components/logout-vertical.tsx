import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVertical = (
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
      <path d="M16 10.5h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2M11.73 3.5v12M8.13 7.1l3.6-3.6 3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVertical);
export default ForwardRef;
