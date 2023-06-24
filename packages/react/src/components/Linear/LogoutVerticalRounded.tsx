import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutVerticalRounded = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 10.5a5 5 0 1 1 0 10H8a5 5 0 0 1 0-10m3.73-7v12m-3.6-8.4 3.6-3.6 3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutVerticalRounded);
export default ForwardRef;
