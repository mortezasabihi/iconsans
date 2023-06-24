import { SVGProps, Ref, forwardRef } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 8.25h-1.25V4.64a2.39 2.39 0 0 0-2.39-2.39h-2.72a2.39 2.39 0 0 0-2.39 2.39v3.61H7A3.75 3.75 0 0 0 3.25 12v6A3.75 3.75 0 0 0 7 21.75h10A3.75 3.75 0 0 0 20.75 18v-6A3.75 3.75 0 0 0 17 8.25ZM9.75 4.64a.89.89 0 0 1 .89-.89h2.72a.89.89 0 0 1 .89.89v3.61h-4.5V4.64ZM12 17.48A2.49 2.49 0 1 1 14.48 15 2.479 2.479 0 0 1 12 17.48Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
