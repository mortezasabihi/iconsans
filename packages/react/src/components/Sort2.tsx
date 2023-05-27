import { SVGProps, Ref, forwardRef } from "react";
const SvgSort2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 16H5m8-4H5m8-4H5m12 5V8m-1.8 3.2L17 13l1.8-1.8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort2);
export default ForwardRef;
