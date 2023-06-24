import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuCheeseburger = (
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
      d="M8 8h12M8 12h12M8 16h12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.01 8H5m0 4h-.01m.02 4H5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuCheeseburger);
export default ForwardRef;
