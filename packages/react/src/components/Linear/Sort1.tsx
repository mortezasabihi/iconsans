import { SVGProps, Ref, forwardRef } from "react";
const SvgSort1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 16h14m-8-4h8m-8-4h8M6.8 13V8m1.8 3.2L6.8 13 5 11.2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort1);
export default ForwardRef;
