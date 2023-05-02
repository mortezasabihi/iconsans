import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferVertical = (
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
      <path d="m6.98 14.4 3.6 3.6V6M17.02 9.6 13.42 6v12" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTransferVertical);
export default ForwardRef;
