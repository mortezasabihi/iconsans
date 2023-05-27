import { SVGProps, Ref, forwardRef } from "react";
const SvgMessages2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        strokeWidth={1.5}
        d="M18 14.32a7.53 7.53 0 0 1-9.57 5.77.86.86 0 0 0-.65 0L5.3 21.33a.44.44 0 0 1-.62-.51l.53-2.14a.89.89 0 0 0-.21-.81 7.52 7.52 0 1 1 13-3.55Z"
      />
      <path strokeWidth={1.5} d="M17.14 16.65A7.52 7.52 0 1 0 6.86 6.39" />
      <path strokeWidth={2} d="M7.63 12.84v.001m3-.001v.001m3-.001v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMessages2);
export default ForwardRef;
