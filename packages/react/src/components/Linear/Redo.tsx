import { SVGProps, Ref, forwardRef } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.58 16.92h-12a4 4 0 1 1 0-8h12"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.58 7 1.84 1.85-1.84 1.85"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
