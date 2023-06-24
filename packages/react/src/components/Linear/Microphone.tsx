import { SVGProps, Ref, forwardRef } from "react";
const SvgMicrophone = (
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
      d="M15.5 5.5a3.5 3.5 0 1 0-7 0v5a3.5 3.5 0 1 0 7 0v-5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 10.5a6.5 6.5 0 1 1-13 0M12 17v5M11 5h2m-2 3h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
