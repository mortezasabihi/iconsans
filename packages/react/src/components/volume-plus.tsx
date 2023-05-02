import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumePlus = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M2.66 16.2v-9a1.5 1.5 0 0 1 1.5-1.5h1.9a2 2 0 0 0 1.1-.33l3.17-2.11a1.5 1.5 0 0 1 2.33 1.24v14.4a1.5 1.5 0 0 1-2.33 1.25L7.16 18a2 2 0 0 0-1.1-.34h-1.9a1.5 1.5 0 0 1-1.5-1.46ZM21.34 12.2h-5.66M18.51 9.37v5.66" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgVolumePlus);
export default ForwardRef;
