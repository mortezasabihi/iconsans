import { SVGProps, Ref, forwardRef } from "react";
const SvgStopCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 11.1a1.4 1.4 0 0 1-1.4 1.4H9.9a1.4 1.4 0 0 1-1.4-1.4V9.9a1.4 1.4 0 0 1 1.4-1.4h4.2a1.4 1.4 0 0 1 1.4 1.4v4.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStopCircle);
export default ForwardRef;
