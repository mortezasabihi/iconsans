import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumeMinus = (
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
      d="M10.33 3.26 7.16 5.37a2 2 0 0 1-1.1.33h-1.9a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h1.9a2 2 0 0 1 1.1.34l3.17 2.11a1.5 1.5 0 0 0 2.33-1.25V4.5a1.5 1.5 0 0 0-2.33-1.24Zm11.01 8.19h-5.66a.75.75 0 1 0 0 1.5h5.66a.75.75 0 0 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeMinus);
export default ForwardRef;
