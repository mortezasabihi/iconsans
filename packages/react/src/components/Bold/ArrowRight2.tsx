import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight2 = (
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
      d="M9.25 18.25a.74.74 0 0 1-.53-.25.75.75 0 0 1 0-1.06l5-5-5-5A.75.75 0 0 1 9.78 6l5.5 5.5a.75.75 0 0 1 0 1.06L9.78 18a.74.74 0 0 1-.53.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2);
export default ForwardRef;
