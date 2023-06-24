import { SVGProps, Ref, forwardRef } from "react";
const SvgAsterisk = (
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
      d="m8.46 8.46 7.08 7.08m0-7.08-7.08 7.08M17 12H7m5 5V7"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAsterisk);
export default ForwardRef;
