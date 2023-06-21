import { SVGProps, Ref, forwardRef } from "react";
const SvgClock3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.6 12.45a.74.74 0 0 1-.6.3.76.76 0 0 1-.45-.15l-4-3a.74.74 0 0 1-.3-.6V6a.75.75 0 1 1 1.5 0v5.62l3.7 2.78a.75.75 0 0 1 .15 1.05Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock3);
export default ForwardRef;
