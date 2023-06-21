import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarEdit = (
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
      d="M11 22H6.84a4 4 0 0 1-4-4V8.75a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3m-13-8.5v3m9-3v3m-14 3.5h18m-6.69 9.97 5.08-5.08a.51.51 0 0 1 .71 0l1.42 1.42a.51.51 0 0 1 0 .71l-5.08 5.08a.493.493 0 0 1-.36.15H14.5a.5.5 0 0 1-.5-.5v-1.42a.49.49 0 0 1 .15-.36ZM18 15.86 20.14 18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.84 13.99V14m4-.01V14m-4 3.99V18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarEdit);
export default ForwardRef;
