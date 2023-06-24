import { SVGProps, Ref, forwardRef } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.86 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10.28-4.95a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8.11 1.9 6.31-3.04m1.8 11.04a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8.11-5.9 6.31 3.04"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
