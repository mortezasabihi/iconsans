import { SVGProps, Ref, forwardRef } from "react";
const SvgUser3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M12 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 19.12v-3.31a2 2 0 0 1 1.94-1.94h11.12a2 2 0 0 1 1.94 1.94v3.31" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser3);
export default ForwardRef;
