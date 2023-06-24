import { SVGProps, Ref, forwardRef } from "react";
const SvgBookmarkMinus = (
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
      d="M15 3.41H9a3 3 0 0 0-3 3v13.17a1 1 0 0 0 1.55.83l4.45-3 4.45 3a.999.999 0 0 0 1.55-.83V6.41a3 3 0 0 0-3-3Zm-1 7.34h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkMinus);
export default ForwardRef;
