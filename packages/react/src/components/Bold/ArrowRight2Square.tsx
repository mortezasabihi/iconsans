import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowRight2Square = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-3 9.53-3 3a.75.75 0 0 1-1.06-1.06l2.5-2.47L10 9.53a.75.75 0 0 1 1-1.06l3 3a.75.75 0 0 1 0 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight2Square);
export default ForwardRef;
