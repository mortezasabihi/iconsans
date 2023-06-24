import { SVGProps, Ref, forwardRef } from "react";
const SvgPower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-.75 3.62a.75.75 0 1 1 1.5 0v3.84a.75.75 0 1 1-1.5 0V6.62ZM12 18.14A5.75 5.75 0 0 1 9.33 7.29a.75.75 0 0 1 1.082.597.741.741 0 0 1-.392.723 4.25 4.25 0 1 0 3.94 0 .75.75 0 0 1 .69-1.33A5.75 5.75 0 0 1 12 18.14Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPower);
export default ForwardRef;
