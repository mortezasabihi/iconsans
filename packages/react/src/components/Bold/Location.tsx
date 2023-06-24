import { SVGProps, Ref, forwardRef } from "react";
const SvgLocation = (
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
      d="M18.18 10.08a6.18 6.18 0 1 0-12.36 0s-.35 2.84 3.69 8.71a3 3 0 0 0 5 0c4.02-5.87 3.67-8.71 3.67-8.71Zm-6.18 2a2 2 0 1 1 2-2 2 2 0 0 1-2 1.99v.01Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
export default ForwardRef;
