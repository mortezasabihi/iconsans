import { SVGProps, Ref, forwardRef } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m8.46 8.46 7.08 7.08m0-7.08-7.08 7.08"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
