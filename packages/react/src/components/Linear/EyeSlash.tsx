import { SVGProps, Ref, forwardRef } from "react";
const SvgEyeSlash = (
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
      d="m18.69 9.19 1.4 1.4a2 2 0 0 1 0 2.82l-2.43 2.43A8 8 0 0 1 10.21 18M7.3 16.66a7.998 7.998 0 0 1-1-.82l-2.39-2.43a2 2 0 0 1 0-2.82l2.43-2.43a8 8 0 0 1 10.23-.92"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.11 13.63a2.5 2.5 0 0 1 3.56-3.49m7.22-7.07L2.93 21.03"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEyeSlash);
export default ForwardRef;
