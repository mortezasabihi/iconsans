import { SVGProps, Ref, forwardRef } from "react";
const SvgCalendarAdd = (
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
      d="M20.92 8.75a4 4 0 0 0-3.25-3.92V3.25a.75.75 0 1 0-1.5 0v1.5h-7.5v-1.5a.75.75 0 1 0-1.5 0v1.5h-.25a4 4 0 0 0-4 4V9h18v-.25Zm-3.34 4.75a5 5 0 0 1 3.34 1.28V10.5h-18V18a4 4 0 0 0 4 4H14a5 5 0 0 1 3.58-8.5ZM7.92 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
    <path
      fill="currentColor"
      d="M17.58 15a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.54 4.25h-.79V20a.75.75 0 0 1-1.5 0v-.79h-.78a.75.75 0 1 1 0-1.5h.78V17a.75.75 0 1 1 1.5 0v.79h.79a.75.75 0 0 1 0 1.5v-.04Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarAdd);
export default ForwardRef;
