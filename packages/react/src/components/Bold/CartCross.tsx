import { SVGProps, Ref, forwardRef } from "react";
const SvgCartCross = (
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
      d="M9.24 19.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.39-12.61A2.29 2.29 0 0 0 19 5.82H7.14a2.25 2.25 0 0 0-1.87-1H3.54a.75.75 0 0 0 0 1.5h1.73A.73.73 0 0 1 6 7l.73 7.3a2.25 2.25 0 0 0 2.24 2h9.3a2.25 2.25 0 0 0 2.24-2l.67-6a2.29 2.29 0 0 0-.55-1.73ZM15.48 12a.74.74 0 0 1 0 1.06.77.77 0 0 1-.53.22.79.79 0 0 1-.53-.22l-.88-.89-.89.89a.75.75 0 0 1-.53.22.79.79 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.89-.89-.89-.88a.75.75 0 0 1 1.06-1.06l.89.88.88-.88a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06l-.88.88.88.89Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCartCross);
export default ForwardRef;
