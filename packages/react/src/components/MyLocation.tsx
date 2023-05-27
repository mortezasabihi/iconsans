import { SVGProps, Ref, forwardRef } from "react";
const SvgMyLocation = (
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
      <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-14V2m0 20v-3m7-7h3M2 12h3" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgMyLocation);
export default ForwardRef;
