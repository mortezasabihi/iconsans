import { SVGProps, Ref, forwardRef } from "react";
const SvgMessageNew2 = (
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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="M19 8.77a7.511 7.511 0 0 1-9.19 9.93.94.94 0 0 0-.64 0L6.67 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81A7.51 7.51 0 0 1 10.79 4.1a7.46 7.46 0 0 1 2.21 0"
      />
      <path strokeWidth={2} d="M9 11.5v.001M12 11.5v.001M15 11.5v.001" />
      <path
        strokeWidth={1.5}
        d="M16.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMessageNew2);
export default ForwardRef;
