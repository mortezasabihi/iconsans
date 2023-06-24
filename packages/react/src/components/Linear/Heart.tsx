import { SVGProps, Ref, forwardRef } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.74 4A4.5 4.5 0 0 0 12 8.46 4.5 4.5 0 0 0 7.26 4 4.69 4.69 0 0 0 3 8.81C3 16.56 9.35 19.28 11.38 20a2 2 0 0 0 1.24 0c2-.67 8.35-3.39 8.38-11.14A4.69 4.69 0 0 0 16.74 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
