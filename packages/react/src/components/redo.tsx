import { SVGProps, Ref, forwardRef } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M19.58 16.92h-12a4 4 0 1 1 0-8h12" />
      <path d="m18.58 7 1.84 1.85-1.84 1.85" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
