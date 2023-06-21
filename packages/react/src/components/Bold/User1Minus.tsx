import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Minus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M11.63 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.25 5.5a4.71 4.71 0 0 0 .46 2.06.3.3 0 0 1-.26.44H6.71a2.57 2.57 0 0 1-2.4-1.54A2.51 2.51 0 0 1 6.63 14h5.45a.3.3 0 0 1 .26.44 4.71 4.71 0 0 0-.46 2.06Zm4.74-3.25a3.25 3.25 0 1 0 .02 6.5 3.25 3.25 0 0 0-.02-6.5Zm1.5 4h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Minus);
export default ForwardRef;