import { SVGProps, Ref, forwardRef } from "react";
const SvgMenuHamburger2 = (
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
      d="M19 7.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-5 4H5a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5Zm-3 4H5a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenuHamburger2);
export default ForwardRef;
