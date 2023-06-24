import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarMinus = (
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
      d="M20.92 8.5a4 4 0 0 0-3.25-3.92V3a.75.75 0 1 0-1.5 0v1.5h-7.5V3a.75.75 0 0 0-1.5 0v1.5h-.25a4 4 0 0 0-4 4v.25h18V8.5Zm-18 1.75v7.5a4 4 0 0 0 4 4H14a5 5 0 0 1 6.92-7.22v-4.28h-18Zm5 8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path
      fill="currentColor"
      d="M17.58 14.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM19.12 19h-3.07a.75.75 0 1 1 0-1.5h3.07a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarMinus);
export default ForwardRef;
