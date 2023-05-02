import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginVerticalRounded = (
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
      <path d="M16 9.5a5 5 0 1 1 0 10H8a5 5 0 0 1 0-10M11.73 16.5v-12" />
      <path d="m15.33 12.9-3.6 3.6-3.6-3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLoginVerticalRounded);
export default ForwardRef;
