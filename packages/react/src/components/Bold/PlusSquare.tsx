import { SVGProps, Ref, forwardRef } from "react";
const SvgPlusSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.5 9.75h-2.75v2.75a.75.75 0 1 1-1.5 0v-2.75H8.5a.75.75 0 1 1 0-1.5h2.75V8.5a.75.75 0 1 1 1.5 0v2.75h2.75a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlusSquare);
export default ForwardRef;
