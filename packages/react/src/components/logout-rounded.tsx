import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutRounded = (
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
      <path d="M15 16a5 5 0 1 1-10 0V8a5 5 0 1 1 10 0M22 11.73H10M18.4 8.13l3.6 3.6-3.6 3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutRounded);
export default ForwardRef;
