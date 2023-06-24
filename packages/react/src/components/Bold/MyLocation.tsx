import { SVGProps, Ref, forwardRef } from "react";
const SvgMyLocation = (
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
      d="M22 11.25h-2.29a7.74 7.74 0 0 0-7-7V2a.75.75 0 1 0-1.5 0v2.29a7.74 7.74 0 0 0-7 7H2a.75.75 0 1 0 0 1.5h2.29a7.74 7.74 0 0 0 7 7V22a.75.75 0 1 0 1.5 0v-2.29a7.74 7.74 0 0 0 7-7H22a.75.75 0 1 0 0-1.5v.04ZM12 14.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMyLocation);
export default ForwardRef;
