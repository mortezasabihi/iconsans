import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1Cross = (
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
      d="M11.62 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 3a2.47 2.47 0 0 0-1.77.74 2.51 2.51 0 0 0-.54 2.72A2.57 2.57 0 0 0 6.71 19h5.36a.299.299 0 0 0 .305-.29.3.3 0 0 0-.035-.15 4.75 4.75 0 0 1 0-4.12.3.3 0 0 0-.27-.44H6.62Zm10-.75a3.25 3.25 0 1 0 .02 6.5 3.25 3.25 0 0 0-.02-6.5Zm1.6 3.75a.75.75 0 0 1-1.06 1.06l-.53-.53-.53.53a.741.741 0 0 1-.53.22.71.71 0 0 1-.53-.22A.74.74 0 0 1 15 17l.53-.53L15 16a.738.738 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.53-.53a.764.764 0 1 1 1.1 1.06l-.53.53.53.47Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1Cross);
export default ForwardRef;
