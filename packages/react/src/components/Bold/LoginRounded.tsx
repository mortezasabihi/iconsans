import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginRounded = (
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
      fill="currentColor"
      d="M13.13 8.66a.75.75 0 1 0-1.06-1.06l-3.6 3.6a.78.78 0 0 0-.22.53.78.78 0 0 0 .22.53l3.6 3.6a.75.75 0 0 0 1.06-1.06l-2.32-2.32H16V16a5 5 0 1 1-10 0V8a5 5 0 1 1 10 0v3h-5.19l2.32-2.34Zm8.62 3.07a.76.76 0 0 1-.75.75h-5V11h5a.76.76 0 0 1 .75.73Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoginRounded);
export default ForwardRef;
