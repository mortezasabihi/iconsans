import { SVGProps, Ref, forwardRef } from "react";
const SvgCategoru2Plus = (
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
      d="M10.37 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-.49-9.25h-1.75V5.5a.75.75 0 1 0-1.5 0v1.75h-1.75a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 1 0 1.5 0V8.75h1.75a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategoru2Plus);
export default ForwardRef;
