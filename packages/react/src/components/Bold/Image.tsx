import { SVGProps, Ref, forwardRef } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 2.25H7A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17V7A4.75 4.75 0 0 0 17 2.25Zm3.25 6.44-6.37 6.36a1.26 1.26 0 0 1-1.76 0l-2.18-2.17a2.8 2.8 0 0 0-3.88 0l-2.31 2.31V7A3.26 3.26 0 0 1 7 3.75h10A3.26 3.26 0 0 1 20.25 7v1.69Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
