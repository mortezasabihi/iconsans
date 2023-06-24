import { SVGProps, Ref, forwardRef } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m13.35 5.26 1.27 2.59a1.5 1.5 0 0 0 1.13.82l2.85.41a1.5 1.5 0 0 1 .83 2.56l-2.06 2a1.49 1.49 0 0 0-.43 1.36l.48 2.84a1.5 1.5 0 0 1-2.17 1.58l-2.55-1.36a1.509 1.509 0 0 0-1.4 0L8.75 19.4a1.5 1.5 0 0 1-2.17-1.58L7.06 15a1.49 1.49 0 0 0-.43-1.33l-2.06-2a1.5 1.5 0 0 1 .83-2.59l2.85-.41a1.5 1.5 0 0 0 1.13-.82l1.27-2.59a1.51 1.51 0 0 1 2.7 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStar);
export default ForwardRef;
