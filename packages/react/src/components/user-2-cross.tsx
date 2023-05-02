import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Cross = (
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
      <path d="M11.83 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.83 20H6.27a1.94 1.94 0 0 1-1.94-1.94v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56M16.49 17.84l3.18-3.18M16.49 14.66l3.18 3.18" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Cross);
export default ForwardRef;
