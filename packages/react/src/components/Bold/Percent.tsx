import { SVGProps, Ref, forwardRef } from "react";
const SvgPercent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M15.75 6.38a.75.75 0 0 0-1 .2L8 16.58a.75.75 0 0 0 .21 1 .74.74 0 0 0 1.04-.21L16 7.42a.75.75 0 0 0-.25-1.04Zm-6.2 1.5a1.09 1.09 0 0 0 .27-.4 1.12 1.12 0 0 0 .1-.48 1.26 1.26 0 0 0-.892-1.195 1.27 1.27 0 0 0-.608-.035.9.9 0 0 0-.23.08L8 6l-.19.16a1.25 1.25 0 0 0-.39.84c-.001.164.03.327.09.48a1.26 1.26 0 0 0 1.16.77 1.23 1.23 0 0 0 .88-.37Zm6.67 8.24a1.29 1.29 0 0 0-1.77 0 1.26 1.26 0 0 0-.37.88 1.219 1.219 0 0 0 .37.88c.116.116.251.211.4.28.153.059.316.09.48.09a1.25 1.25 0 0 0 .89-2.13Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPercent);
export default ForwardRef;
