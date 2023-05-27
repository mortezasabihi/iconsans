import { SVGProps, Ref, forwardRef } from "react";
const SvgMyLocationSlash = (
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
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M18.71 10A7 7 0 0 1 10 18.71M7 16.9A7 7 0 0 1 16.9 7M12 5V2m0 20v-3m7-7h3M2 12h3" />
      <path d="M10.59 13.41a2 2 0 0 1 2.82-2.82M21 3 3 21" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMyLocationSlash);
export default ForwardRef;
