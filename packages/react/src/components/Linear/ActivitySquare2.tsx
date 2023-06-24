import { SVGProps, Ref, forwardRef } from "react";
const SvgActivitySquare2 = (
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
      d="m7 14.14 2.21-2.83a1.42 1.42 0 0 1 2.25 0l1.08 1.38a1.42 1.42 0 0 0 2.25 0L17 9.86"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7m5 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgActivitySquare2);
export default ForwardRef;
