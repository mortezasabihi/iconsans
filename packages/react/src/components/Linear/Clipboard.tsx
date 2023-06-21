import { SVGProps, Ref, forwardRef } from "react";
const SvgClipboard = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.12 4.25H16a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3h.9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.5 2.75h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 0 0 0-3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClipboard);
export default ForwardRef;
