import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginRounded = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 16a5 5 0 1 1-10 0V8a5 5 0 1 1 10 0m-7 3.73h12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.6 15.33 9 11.73l3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoginRounded);
export default ForwardRef;
