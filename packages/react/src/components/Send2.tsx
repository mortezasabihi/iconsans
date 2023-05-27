import { SVGProps, Ref, forwardRef } from "react";
const SvgSend2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <g stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5}>
      <path d="m7.69 9.72 8-2.66a1 1 0 0 1 1.26 1.26l-2.66 8a1 1 0 0 1-1.9 0l-1-3a1 1 0 0 0-.64-.64l-3-1a1 1 0 0 1-.06-1.96Z" />
      <path strokeLinecap="round" d="m11.21 12.79 1.41-1.41" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgSend2);
export default ForwardRef;
