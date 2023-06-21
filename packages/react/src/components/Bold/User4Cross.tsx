import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Cross = (
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
      d="M11.13 9.32a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.74 7.86a5 5 0 0 1 2-4 .3.3 0 0 0-.07-.51 7.51 7.51 0 0 0-10.15 6.7.32.32 0 0 0 .31.32h8.12a.3.3 0 0 0 .27-.44 4.84 4.84 0 0 1-.48-2.07Z"
    />
    <path
      fill="currentColor"
      d="M16.87 13.68a3.5 3.5 0 1 0 3.5 3.5 3.491 3.491 0 0 0-3.5-3.5Zm1.59 4a.75.75 0 0 1-1.06 1.06l-.53-.53-.53.53a.74.74 0 0 1-.53.22.73.73 0 0 1-.53-.22.74.74 0 0 1 0-1.06l.53-.53-.53-.53a.75.75 0 1 1 1.06-1.06l.53.53.53-.53a.74.74 0 0 1 1.06 0 .75.75 0 0 1 0 1.06l-.53.53.53.53Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Cross);
export default ForwardRef;