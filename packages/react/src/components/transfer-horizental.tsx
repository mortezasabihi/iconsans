import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferHorizental = (
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
      <path d="m14.4 17.02 3.6-3.6H6M9.6 6.98 6 10.58h12" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTransferHorizental);
export default ForwardRef;
