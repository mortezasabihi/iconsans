import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Plus = (
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
      d="M11.63 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 3a2.48 2.48 0 0 0-1.78.74 2.51 2.51 0 0 0-.54 2.72A2.57 2.57 0 0 0 6.71 19h5.37a.3.3 0 0 0 .26-.44 4.84 4.84 0 0 1 0-4.12.3.3 0 0 0-.26-.44H6.63Zm10-.75a3.25 3.25 0 1 0 3.25 3.25 3.26 3.26 0 0 0-3.25-3.25Zm1.5 4h-.75V18a.75.75 0 1 1-1.5 0v-.75h-.75a.75.75 0 1 1 0-1.5h.75V15a.75.75 0 1 1 1.5 0v.75h.75a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Plus);
export default ForwardRef;
