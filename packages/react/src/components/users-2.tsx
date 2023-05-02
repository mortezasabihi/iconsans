import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d="M10.03 9.94a2.74 2.74 0 1 0 0-5.48 2.74 2.74 0 0 0 0 5.48ZM15.11 12.69H4.94a1.77 1.77 0 0 0-1.77 1.77v3.32c0 .977.792 1.77 1.77 1.77h10.17a1.77 1.77 0 0 0 1.77-1.77v-3.32a1.77 1.77 0 0 0-1.77-1.77ZM14.6 4.8a2.4 2.4 0 0 1 0 4.8M18 11.25a1.66 1.66 0 0 1 1.65 1.65V17" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUsers2);
export default ForwardRef;
