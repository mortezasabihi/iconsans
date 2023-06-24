import { SVGProps, Ref, forwardRef } from "react";
const SvgLoginVerticalRounded = (
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
      d="M21 14.5a5 5 0 0 1-5 5H8a5 5 0 0 1 0-10h3v5.19l-2.34-2.32a.75.75 0 0 0-1.06 0 .74.74 0 0 0 0 1.06L11.2 17a.56.56 0 0 0 .24.16.72.72 0 0 0 .57 0 .6.6 0 0 0 .25-.16l3.6-3.6a.75.75 0 1 0-1.06-1.06l-2.32 2.32V9.5H16a5 5 0 0 1 5 5Zm-8.52-10v5H11v-5a.75.75 0 1 1 1.5 0h-.02Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLoginVerticalRounded);
export default ForwardRef;
