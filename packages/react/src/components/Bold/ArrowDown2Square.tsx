import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDown2Square = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.47 8-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1L12 12.44 14.47 10a.75.75 0 0 1 1.06 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown2Square);
export default ForwardRef;
