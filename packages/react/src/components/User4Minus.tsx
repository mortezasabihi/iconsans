import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Minus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M19.75 18.1h-4.5m-3.5-8.45a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.25 20a7.49 7.49 0 0 1 11.5-6.34"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Minus);
export default ForwardRef;
