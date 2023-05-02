import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarEdit = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 22H6.84a4 4 0 0 1-4-4V8.75a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3M7.84 3.25v3M16.84 3.25v3M2.84 9.75h18M14.15 19.72l5.08-5.08a.51.51 0 0 1 .71 0l1.42 1.42a.51.51 0 0 1 0 .71l-5.08 5.08a.493.493 0 0 1-.36.15H14.5a.5.5 0 0 1-.5-.5v-1.42a.49.49 0 0 1 .15-.36ZM18 15.86 20.14 18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.8 14v.001M11.8 14v.001M7.8 18v.001"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarEdit);
export default ForwardRef;
