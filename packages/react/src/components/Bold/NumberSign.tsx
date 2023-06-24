import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSign = (
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
      d="M18 13.5h-3v-3h3A.75.75 0 1 0 18 9h-3V6a.75.75 0 1 0-1.5 0v3h-3V6A.75.75 0 1 0 9 6v3H6a.75.75 0 0 0 0 1.5h3v3H6A.75.75 0 1 0 6 15h3v3a.75.75 0 1 0 1.5 0v-3h3v3a.75.75 0 1 0 1.5 0v-3h3a.75.75 0 1 0 0-1.5Zm-7.5 0v-3h3v3h-3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSign);
export default ForwardRef;
