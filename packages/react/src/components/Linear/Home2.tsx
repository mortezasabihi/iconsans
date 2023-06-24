import { SVGProps, Ref, forwardRef } from "react";
const SvgHome2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
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
      d="M19.5 8.9v8a3 3 0 0 1-3 3H14v-4a2 2 0 0 0-4 0v4H7.5a3 3 0 0 1-3-3v-8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome2);
export default ForwardRef;
