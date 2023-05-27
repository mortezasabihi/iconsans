import { SVGProps, Ref, forwardRef } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M4.42 16.92h12a4 4 0 1 0 0-8h-12" />
      <path d="M5.42 7 3.58 8.85l1.84 1.85" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
export default ForwardRef;
