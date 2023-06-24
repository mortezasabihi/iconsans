import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Cross = (
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
      d="M11.93 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 8h-7a2.5 2.5 0 0 1 0-5h7m5.64 3.65-2.47-2.48m0 2.48 2.47-2.48"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Cross);
export default ForwardRef;
