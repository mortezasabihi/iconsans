import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowDownCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.53 11.53-3 3a.81.81 0 0 1-.24.17.87.87 0 0 1-.58 0 .81.81 0 0 1-.24-.17l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V7a.75.75 0 1 1 1.5 0v8.19l1.72-1.72a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDownCircle);
export default ForwardRef;
