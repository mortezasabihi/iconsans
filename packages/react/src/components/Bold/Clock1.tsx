import { SVGProps, Ref, forwardRef } from "react";
const SvgClock1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.53 6L12 13.53a.75.75 0 0 1-1.06 0L8.47 11a.75.75 0 0 1 1.06-1l2 2 4-4a.75.75 0 0 1 1 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock1);
export default ForwardRef;
