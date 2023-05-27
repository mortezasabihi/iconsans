import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscoverCircle = (
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
    <g stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5}>
      <path d="M9.65 8.53 15 7.27A1.47 1.47 0 0 1 16.73 9l-1.26 5.31a1.52 1.52 0 0 1-1.12 1.12L9 16.73A1.47 1.47 0 0 1 7.27 15l1.26-5.35a1.52 1.52 0 0 1 1.12-1.12Z" />
      <path d="M12 13.36a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72Z" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDiscoverCircle);
export default ForwardRef;
