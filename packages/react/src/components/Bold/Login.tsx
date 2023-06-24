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
      fill="currentColor"
      d="M11.63 8.66a.75.75 0 1 0-1.06-1.06L7 11.2a.78.78 0 0 0-.22.53.78.78 0 0 0 .22.53l3.6 3.6a.75.75 0 0 0 1.06-1.06l-2.35-2.32h5.19V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5H9.31l2.32-2.34Zm8.62 3.07a.76.76 0 0 1-.75.75h-5V11h5a.76.76 0 0 1 .75.73Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
