import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M12 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17.56 12.5H6.44a1.94 1.94 0 0 0-1.94 1.94v3.62A1.94 1.94 0 0 0 6.44 20h11.12a1.94 1.94 0 0 0 1.94-1.94v-3.62a1.94 1.94 0 0 0-1.94-1.94Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUser2);
export default ForwardRef;
