import { SVGProps, Ref, forwardRef } from "react";
const SvgSearchTick = (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 18.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 3 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.5 12.18 1.88 1.88 4.12-4.12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearchTick);
export default ForwardRef;
