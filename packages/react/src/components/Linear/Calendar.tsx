import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendar = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 4.75H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.75a4 4 0 0 0-4-4Zm-9-1.5v3m9-3v3M3 9.75h18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 13.99V14m4-.01V14m4-.01V14m0 3.99V18m-4-.01V18m-4-.01V18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;
