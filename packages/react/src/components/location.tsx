import { SVGProps, Ref, forwardRef } from "react";
const SvgLocation = (
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
      <path d="M13.61 19.65a1.999 1.999 0 0 1-3.22 0c-5-6.7-4.57-9.93-4.57-9.93a6.18 6.18 0 0 1 12.36 0s.4 3.28-4.57 9.93Z" />
      <path d="M12 11.71a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
