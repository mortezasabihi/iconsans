import { SVGProps, Ref, forwardRef } from "react";
const SvgMessagePlus2 = (
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
        d="M18.52 8.77a7.51 7.51 0 0 1-9.19 9.94 1 1 0 0 0-.65 0L6.19 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81A7.51 7.51 0 0 1 10.31 4.1a7.46 7.46 0 0 1 2.21 0M16 4v4m2-2h-4"
      />
      <path strokeWidth={2} d="M8.5 11.5v.001m3-.001v.001m3-.001v.001" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMessagePlus2);
export default ForwardRef;
