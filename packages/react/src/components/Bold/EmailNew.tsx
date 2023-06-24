import { SVGProps, Ref, forwardRef } from "react";
const SvgEmailNew = (
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
      d="M21.58 9.12a3.57 3.57 0 0 1-2.94.12 3.4 3.4 0 0 1-1.88-1.88 3.56 3.56 0 0 1 .12-2.94.291.291 0 0 0-.27-.42H5.4A3.41 3.41 0 0 0 2 7.4v9.2A3.41 3.41 0 0 0 5.4 20h13.2a3.41 3.41 0 0 0 3.4-3.4V9.39a.29.29 0 0 0-.42-.27Zm-5.44 2-2.57 1.68a2.67 2.67 0 0 1-1.56.49 2.79 2.79 0 0 1-1.61-.51L5.59 9.63a.752.752 0 1 1 .82-1.26l4.84 3.17a1.26 1.26 0 0 0 1.48 0l2.59-1.7a.75.75 0 1 1 .82 1.25v.03Z"
    />
    <path fill="currentColor" d="M20 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEmailNew);
export default ForwardRef;
