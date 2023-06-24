import { SVGProps, Ref, forwardRef } from "react";
const SvgCategory6 = (
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
      d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-1.5 6H6A1.5 1.5 0 0 0 4.5 15v3A1.5 1.5 0 0 0 6 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 13.5Zm10.5 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM15.89 5.17l-2.28 4a.7.7 0 0 0 .6 1h4.58a.7.7 0 0 0 .6-1l-2.28-4a.7.7 0 0 0-1.22 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory6);
export default ForwardRef;
