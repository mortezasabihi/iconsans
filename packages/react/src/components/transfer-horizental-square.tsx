import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferHorizentalSquare = (
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
      <path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z" />
      <path d="m10.09 7.57-2.87 2.86h9.56M13.91 16.43l2.87-2.86H7.22" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTransferHorizentalSquare);
export default ForwardRef;
