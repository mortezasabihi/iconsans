import { SVGProps, Ref, forwardRef } from "react";
const SvgReceive = (
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
      d="m16.24 7.76-8.48 8.48m3.39-8.48h5.09v5.09"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgReceive);
export default ForwardRef;
