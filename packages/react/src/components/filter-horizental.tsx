import { SVGProps, Ref, forwardRef } from "react";
const SvgFilterHorizental = (
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
      <path d="M3.5 6h11M19 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 12h-11M5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 18h11M19 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgFilterHorizental);
export default ForwardRef;
