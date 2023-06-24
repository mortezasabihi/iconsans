import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Minus = (
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
      d="M11.13 9.32a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.74 7.86a5 5 0 0 1 2-4 .29.29 0 0 0-.07-.51 7.51 7.51 0 0 0-10.15 6.7.32.32 0 0 0 .31.32h8.12a.3.3 0 0 0 .27-.44 4.841 4.841 0 0 1-.48-2.07Z"
    />
    <path
      fill="currentColor"
      d="M16.87 13.68a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.5 4.25h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Minus);
export default ForwardRef;
