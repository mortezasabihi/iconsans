import { SVGProps, Ref, forwardRef } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M13 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM16 10.2l4-3.95a1.2 1.2 0 0 1 2 .85v9.8a1.2 1.2 0 0 1-2.05.85L16 13.8v-3.6Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgVideo);
export default ForwardRef;
