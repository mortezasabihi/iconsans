import { SVGProps, Ref, forwardRef } from "react";
const SvgDollarsign = (
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
      d="M16 9.75a.76.76 0 0 0 .75-.75V7A2.75 2.75 0 0 0 14 4.25h-1.25V3a.75.75 0 1 0-1.5 0v1.25H10A2.75 2.75 0 0 0 7.25 7v1a2.77 2.77 0 0 0 1.1 2.2l2.9 2.17v5.88H10A1.25 1.25 0 0 1 8.75 17v-2a.75.75 0 1 0-1.5 0v2A2.75 2.75 0 0 0 10 19.75h1.25V21a.75.75 0 1 0 1.5 0v-1.25H14A2.75 2.75 0 0 0 16.75 17v-1a2.77 2.77 0 0 0-1.1-2.2l-2.9-2.17V5.75H14A1.25 1.25 0 0 1 15.25 7v2a.76.76 0 0 0 .75.75ZM14.75 15a1.27 1.27 0 0 1 .5 1v1A1.25 1.25 0 0 1 14 18.25h-1.25V13.5l2 1.5Zm-3.5-4.5-2-1.5a1.26 1.26 0 0 1-.5-1V7A1.25 1.25 0 0 1 10 5.75h1.25v4.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDollarsign);
export default ForwardRef;
