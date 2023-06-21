import { SVGProps, Ref, forwardRef } from "react";
const SvgStopSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.5 11.1a1.4 1.4 0 0 1-1.4 1.4H9.9a1.4 1.4 0 0 1-1.4-1.4V9.9a1.4 1.4 0 0 1 1.4-1.4h4.2a1.4 1.4 0 0 1 1.4 1.4v4.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStopSquare);
export default ForwardRef;
