import { SVGProps, Ref, forwardRef } from "react";
const SvgUnlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 8.25H9.75V4.64a.89.89 0 0 1 .89-.89h2.72a.89.89 0 0 1 .89.89V6a.75.75 0 1 0 1.5 0V4.64a2.39 2.39 0 0 0-2.39-2.39h-2.72a2.39 2.39 0 0 0-2.39 2.39v3.61H7A3.75 3.75 0 0 0 3.25 12v6A3.75 3.75 0 0 0 7 21.75h10A3.75 3.75 0 0 0 20.75 18v-6A3.75 3.75 0 0 0 17 8.25Zm-5 9.23A2.49 2.49 0 1 1 14.48 15 2.479 2.479 0 0 1 12 17.48Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUnlock);
export default ForwardRef;
