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
      fill="currentColor"
      d="M17.5 15.5a.741.741 0 0 1-.53-.22l-5-5-5 5A.75.75 0 0 1 6 14.22l5.5-5.5a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1-.56 1.28Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp2);
export default ForwardRef;
