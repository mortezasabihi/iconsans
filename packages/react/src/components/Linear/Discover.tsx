import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscover = (
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
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.55 6.91 7.79-1.84a2.14 2.14 0 0 1 2.59 2.59l-1.84 7.79a2.24 2.24 0 0 1-1.64 1.64l-7.79 1.84a2.14 2.14 0 0 1-2.59-2.59l1.84-7.79a2.24 2.24 0 0 1 1.64-1.64Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscover);
export default ForwardRef;
