import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Tick = (
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
      d="M11.13 9.32a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.74 7.86a5 5 0 0 1 2-4 .3.3 0 0 0-.08-.51 7.51 7.51 0 0 0-10.15 6.7.32.32 0 0 0 .31.32h8.13a.3.3 0 0 0 .26-.44 5 5 0 0 1-.47-2.07Z"
    />
    <path
      fill="currentColor"
      d="M16.87 13.68a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm2.05 3-2.09 2.09a.71.71 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.95-.95a.75.75 0 0 1 1.06-1.06l.42.42 1.56-1.56a.749.749 0 0 1 1.234.816.75.75 0 0 1-.174.244Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Tick);
export default ForwardRef;
