import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2Plus = (
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
      d="M12 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm.5 6.75A4.94 4.94 0 0 1 13.72 13a.3.3 0 0 0-.23-.49h-7a1.939 1.939 0 0 0-1.99 1.93v3.62A1.94 1.94 0 0 0 6.44 20h7.05a.3.3 0 0 0 .23-.49 4.94 4.94 0 0 1-1.22-3.26Z"
    />
    <path
      fill="currentColor"
      d="M17.5 12.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM19 17h-.75v.75a.75.75 0 1 1-1.5 0V17H16a.75.75 0 1 1 0-1.5h.75v-.75a.75.75 0 1 1 1.5 0v.75H19a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2Plus);
export default ForwardRef;
