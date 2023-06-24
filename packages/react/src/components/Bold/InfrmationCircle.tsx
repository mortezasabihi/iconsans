import { SVGProps, Ref, forwardRef } from "react";
const SvgInfrmationCircle = (
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
      fill="currentColor"
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-.75-4.5a.75.75 0 1 0 1.5 0v-6.3a.75.75 0 1 0-1.5 0v6.3Zm.75-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInfrmationCircle);
export default ForwardRef;
