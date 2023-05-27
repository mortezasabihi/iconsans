import { SVGProps, Ref, forwardRef } from "react";
const SvgLink1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 8h1a4 4 0 1 1 0 8h-1m-6 0H8a4 4 0 1 1 0-8h1m0 4h6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLink1);
export default ForwardRef;
