import { SVGProps, Ref, forwardRef } from "react";
const SvgMessage = (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.2 17.15a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V7.43a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.85a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.29l-2.84 2.86a.5.5 0 0 1-.85-.36v-1.92Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10.28v.01m3-.01v.01m3-.01v.01"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessage);
export default ForwardRef;
