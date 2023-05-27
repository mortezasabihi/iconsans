import { SVGProps, Ref, forwardRef } from "react";
const SvgHome1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M10 19.9H7.5a3 3 0 0 1-3-3v-8l6-4m3 0 6 4v8a3 3 0 0 1-3 3H14" />
      <path
        strokeLinecap="round"
        d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1m11 10v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgHome1);
export default ForwardRef;
