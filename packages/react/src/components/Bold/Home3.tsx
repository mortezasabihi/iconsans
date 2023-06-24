import { SVGProps, Ref, forwardRef } from "react";
const SvgHome3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.42 9.65 13 4a1.74 1.74 0 0 0-2 0L2.58 9.65a.753.753 0 1 0 .84 1.25l1.08-.72v7.1a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-7.1l1.08.72a.81.81 0 0 0 .42.1.73.73 0 0 0 .725-.88.75.75 0 0 0-.305-.47ZM14 18h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome3);
export default ForwardRef;
