import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginVerticalRounded = (
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
      d="M16 9.5a5 5 0 1 1 0 10H8a5 5 0 0 1 0-10m3.73 7v-12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.33 12.9-3.6 3.6-3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoginVerticalRounded);
export default ForwardRef;
