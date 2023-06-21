import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp2 = (
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
      d="m6.5 14.75 5.5-5.5 5.5 5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp2);
export default ForwardRef;
