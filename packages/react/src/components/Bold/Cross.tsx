import { SVGProps, Ref, forwardRef } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m13.06 12 3-3A.753.753 0 1 0 15 7.93l-3 3-3-3A.757.757 0 0 0 7.93 9l3 3-3 3a.75.75 0 0 0 0 1.06.79.79 0 0 0 .821.17.75.75 0 0 0 .249-.16l3-3 3 3c.14.14.331.22.53.22a.79.79 0 0 0 .53-.22.75.75 0 0 0 0-1.06l-3-3.01Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
