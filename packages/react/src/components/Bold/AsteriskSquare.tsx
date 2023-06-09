import { SVGProps, Ref, forwardRef } from "react";
const SvgAsteriskSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1 9.75h-2.19l1.55 1.55a.75.75 0 0 1 0 1.06.79.79 0 0 1-.53.22.77.77 0 0 1-.53-.22l-1.55-1.55V16a.75.75 0 1 1-1.5 0v-2.19L9.7 15.36a.77.77 0 0 1-.53.22.79.79 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.55-1.55H8a.75.75 0 1 1 0-1.5h2.19L8.64 9.7A.75.75 0 0 1 9.7 8.64l1.55 1.55V8a.75.75 0 1 1 1.5 0v2.19l1.55-1.55a.75.75 0 0 1 1.06 1.06l-1.55 1.55H16a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgAsteriskSquare);
export default ForwardRef;
