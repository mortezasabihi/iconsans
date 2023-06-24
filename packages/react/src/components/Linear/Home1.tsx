import { SVGProps, Ref, forwardRef } from "react";
const SvgHome1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 9.9-1.5-1-6-4-.95-.63a1 1 0 0 0-1.1 0l-.95.63-6 4-1.5 1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 8.9v8a3 3 0 0 1-3 3H14v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H7.5a3 3 0 0 1-3-3v-8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome1);
export default ForwardRef;
