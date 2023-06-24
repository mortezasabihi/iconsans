import { SVGProps, Ref, forwardRef } from "react";
const SvgClock5 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm.75 9a.76.76 0 0 1-.75.75H7a.75.75 0 1 1 0-1.5h4.25V6a.75.75 0 1 1 1.5 0v6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock5);
export default ForwardRef;
