import { SVGProps, Ref, forwardRef } from "react";
const SvgForward = (
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
      <path d="M11.16 10.54 6.78 8a1.68 1.68 0 0 0-2.53 1.47v5.06A1.68 1.68 0 0 0 6.78 16l4.38-2.53a1.69 1.69 0 0 0 0-2.93Z" />
      <path d="M18.91 10.54 14.53 8A1.68 1.68 0 0 0 12 9.47v5.06A1.68 1.68 0 0 0 14.53 16l4.38-2.53a1.69 1.69 0 0 0 0-2.93Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgForward);
export default ForwardRef;
