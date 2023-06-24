import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscoverSquare = (
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
      d="M13.08 10.92a1.53 1.53 0 1 1-2.161 2.168 1.53 1.53 0 0 1 2.161-2.168Z"
    />
    <path
      fill="currentColor"
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-.27 6-1.26 5.31a1.5 1.5 0 0 1-1.12 1.12L9 16.73A1.46 1.46 0 0 1 7.27 15l1.26-5.35a1.51 1.51 0 0 1 1.12-1.11L15 7.28A1.46 1.46 0 0 1 16.73 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscoverSquare);
export default ForwardRef;
