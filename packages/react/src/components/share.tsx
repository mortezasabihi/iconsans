import { SVGProps, Ref, forwardRef } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
    >
      <path d="M6.86 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.14 9.05a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.03 10.95l6.31-3.04M17.14 18.95a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9.03 13.05l6.31 3.04" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
