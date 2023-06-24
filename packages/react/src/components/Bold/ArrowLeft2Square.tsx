import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowLeft2Square = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-3 11.47a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3A.75.75 0 0 1 14 9.53L11.56 12 14 14.47Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft2Square);
export default ForwardRef;
