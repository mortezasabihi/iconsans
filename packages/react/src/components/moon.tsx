import { SVGProps, Ref, forwardRef } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18 14.09A6.22 6.22 0 1 1 9.91 6a6.15 6.15 0 0 0-.45 2.32 6.23 6.23 0 0 0 6.22 6.22 6.15 6.15 0 0 0 2.32-.45Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMoon);
export default ForwardRef;
