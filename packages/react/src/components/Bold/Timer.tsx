import { SVGProps, Ref, forwardRef } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 6.22a.75.75 0 1 1-1.5 0V7.67a.75.75 0 1 1 1.5 0v3.55ZM10 3.75h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
