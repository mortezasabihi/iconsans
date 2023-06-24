import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory2 = (
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
      d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-9 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory2);
export default ForwardRef;
