import { SVGProps, Ref, forwardRef } from "react";
const SvgFilterHorizental = (
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
      d="M14.5 6.75h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm1.5 4.75h-11a.75.75 0 1 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9.5 4.75h-11a.75.75 0 1 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM19 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterHorizental);
export default ForwardRef;
