import { SVGProps, Ref, forwardRef } from "react";
const SvgForward = (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.6 13.43 7.18 16a1.69 1.69 0 0 1-2.53-1.46V9.47A1.69 1.69 0 0 1 7.18 8l4.38 2.53"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.51 10.54 14.13 8a1.68 1.68 0 0 0-2.53 1.47v5.06A1.68 1.68 0 0 0 14.13 16l4.38-2.53a1.69 1.69 0 0 0 0-2.93Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgForward);
export default ForwardRef;
