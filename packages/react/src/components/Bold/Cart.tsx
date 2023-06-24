import { SVGProps, Ref, forwardRef } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.25 19.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.38-12.61A2.21 2.21 0 0 0 19 5.82H7.15a2.26 2.26 0 0 0-1.88-1H3.54a.75.75 0 0 0 0 1.5h1.73A.75.75 0 0 1 6 7l.73 7.3a2.25 2.25 0 0 0 2.24 2h9.3a2.25 2.25 0 0 0 2.24-2l.66-6a2.23 2.23 0 0 0-.54-1.73Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCart);
export default ForwardRef;
