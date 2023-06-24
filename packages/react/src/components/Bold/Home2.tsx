import { SVGProps, Ref, forwardRef } from "react";
const SvgHome2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.42 9.65 13 4a1.75 1.75 0 0 0-2 0L2.58 9.65a.75.75 0 0 0-.2 1 .74.74 0 0 0 1 .21l1.08-.72v7.1a3 3 0 0 0 3 3H9.2a.8.8 0 0 0 .8-.8v-3.2a2 2 0 0 1 4 0v3.2a.8.8 0 0 0 .8.8h1.7a3 3 0 0 0 3-3v-7.1l1.08.72A.81.81 0 0 0 21 11a.73.73 0 0 0 .725-.88.75.75 0 0 0-.305-.47Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome2);
export default ForwardRef;
