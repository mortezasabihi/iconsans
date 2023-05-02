import { SVGProps, Ref, forwardRef } from "react";
const SvgScan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M9.33 20H7.56A3.57 3.57 0 0 1 4 16.44v-1.77M20 14.67v1.77A3.57 3.57 0 0 1 16.44 20h-1.77M14.67 4h1.77A3.57 3.57 0 0 1 20 7.56v1.77M4 9.33V7.56A3.57 3.57 0 0 1 7.56 4h1.77M2 12h20" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgScan);
export default ForwardRef;
