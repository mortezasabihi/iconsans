import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarTick = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      fill="currentColor"
      d="M20.92 8.5a4 4 0 0 0-3.25-3.92V3a.75.75 0 1 0-1.5 0v1.5h-7.5V3a.75.75 0 0 0-1.5 0v1.5h-.25a4 4 0 0 0-4 4v.25h18V8.5Zm-3.34 4.75a5 5 0 0 1 3.34 1.28v-4.28h-18v7.5a4 4 0 0 0 4 4H14a5 5 0 0 1 3.58-8.5Zm-9.66 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path
      fill="currentColor"
      d="M17.58 14.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm2 3.05-2 2a.75.75 0 0 1-1.06 0l-.89-.89a.75.75 0 1 1 1.06-1.06l.36.36 1.43-1.43a.75.75 0 0 1 1.06 1.06l.04-.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarTick);
export default ForwardRef;
