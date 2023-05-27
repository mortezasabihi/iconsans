import { SVGProps, Ref, forwardRef } from "react";
const SvgLogoutRounded = (
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
      d="M15 16a5 5 0 1 1-10 0V8a5 5 0 1 1 10 0m7 3.73H10m8.4-3.6 3.6 3.6-3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogoutRounded);
export default ForwardRef;
