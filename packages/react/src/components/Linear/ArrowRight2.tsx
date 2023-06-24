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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.25 6.5 5.5 5.5-5.5 5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2);
export default ForwardRef;
