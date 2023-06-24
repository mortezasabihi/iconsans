import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp3 = (
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
      d="m10.56 7.85-3.83 6.64A1.66 1.66 0 0 0 8.16 17h7.68a1.66 1.66 0 0 0 1.43-2.49l-3.83-6.66a1.66 1.66 0 0 0-2.88 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp3);
export default ForwardRef;
