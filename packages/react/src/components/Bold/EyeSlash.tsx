import { SVGProps, Ref, forwardRef } from "react";
const SvgEyeSlash = (
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
      d="M19.07 9.57a.3.3 0 0 0-.42 0l-8.29 8.28a.11.11 0 0 0 .06.17 7.93 7.93 0 0 0 7.24-2.18l2.43-2.43a1.999 1.999 0 0 0 0-2.83l-1.02-1.01Zm2.35-7.08a.75.75 0 0 0-1.06 0L16 6.88a8 8 0 0 0-9.66 1.28l-2.43 2.42a2 2 0 0 0 0 2.83l2.43 2.43c.11.11.24.21.36.31l-4.3 4.3a.75.75 0 0 0 1.06 1.06l18-18a.74.74 0 0 0-.04-1.02ZM9.45 13.4a3 3 0 0 1-.36-1.4 2.89 2.89 0 0 1 4.31-2.54L9.45 13.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEyeSlash);
export default ForwardRef;
