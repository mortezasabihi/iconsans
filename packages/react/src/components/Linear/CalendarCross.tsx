import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarCross = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.37 21.14H6.3a4 4 0 0 1-4-4V7.89a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5.87M7.3 2.39v3m9-3v3m-14 3.5h18m-1.86 7.29-2.17 2.17m2.17 0-2.17-2.17"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.35 21.61a4.35 4.35 0 1 0 0-8.7 4.35 4.35 0 0 0 0 8.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.3 13.14v.01m4-.01v.01m-4 3.99v.01"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarCross);
export default ForwardRef;
