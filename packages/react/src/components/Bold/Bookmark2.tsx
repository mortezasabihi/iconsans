import { SVGProps, Ref, forwardRef } from "react";
const SvgBookmark2 = (
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
      d="M15 3.42H9a3 3 0 0 0-3 3v13.17a1 1 0 0 0 1.55.83l4.45-3 4.45 3a1 1 0 0 0 1.55-.83V6.42a3 3 0 0 0-3-3Zm-1 4.33h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmark2);
export default ForwardRef;
