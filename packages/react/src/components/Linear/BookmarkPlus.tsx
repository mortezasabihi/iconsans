import { SVGProps, Ref, forwardRef } from "react";
const SvgBookmarkPlus = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 10h4m-2-2v4m-6 7.58V6.42a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v13.16a1 1 0 0 1-1.55.84l-4.45-3-4.45 3A1 1 0 0 1 6 19.58Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkPlus);
export default ForwardRef;
