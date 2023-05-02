import { SVGProps, Ref, forwardRef } from "react";
const SvgTicketPercent = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="m14 9-4 6M3 10V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2h-2a2 2 0 0 0 0 4h2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2h2a2 2 0 1 0 0-4H3Z"
      />
      <path strokeWidth={2} d="M10 9v.001M14 15v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTicketPercent);
export default ForwardRef;
