import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginVertical = (
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
      <path d="M16 9.5h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2m3.73 7v-12" />
      <path d="m15.33 12.9-3.6 3.6-3.6-3.6" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLoginVertical);
export default ForwardRef;
