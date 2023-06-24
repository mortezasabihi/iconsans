import { SVGProps, Ref, forwardRef } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 16v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2m-7 3.73h12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.1 15.33-3.6-3.6 3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
