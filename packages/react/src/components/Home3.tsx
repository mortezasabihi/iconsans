import { SVGProps, Ref, forwardRef } from "react";
const SvgHome3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="m13.5 4.9 6 4v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8l6-4" />
      <path
        strokeLinecap="round"
        d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1m7 7h4"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgHome3);
export default ForwardRef;
