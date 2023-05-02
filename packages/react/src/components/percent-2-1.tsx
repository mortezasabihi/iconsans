import { SVGProps, Ref, forwardRef } from "react";
const SvgPercent21 = (
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
    <g stroke="currentColor" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="m20.65 10.94-1.78-1.78V6.63a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.78a1.49 1.49 0 0 0-2.12 0L9.16 5.13H6.63a1.5 1.5 0 0 0-1.5 1.5v2.53l-1.78 1.78a1.49 1.49 0 0 0 0 2.12l1.78 1.78v2.53a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.53l1.78-1.78a1.49 1.49 0 0 0 0-2.12Z"
      />
      <path strokeLinecap="round" strokeWidth={1.5} d="M10 15.62 14.4 8" />
      <path
        strokeLinecap="round"
        strokeWidth={2}
        d="M14.2 15.31v.001M10.2 8.31v.001"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgPercent21);
export default ForwardRef;
