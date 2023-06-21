import { SVGProps, Ref, forwardRef } from "react";
const SvgClipboardMinus = (
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
      d="M16.3 4.26a.31.31 0 0 0-.32.29 2.5 2.5 0 0 1-2.48 2.2h-3A2.49 2.49 0 0 1 8 4.55a.31.31 0 0 0-.32-.29 3 3 0 0 0-2.7 3v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-11a3 3 0 0 0-2.68-3ZM14 13.75h-4a.75.75 0 1 1 0-1.5h4a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M10.5 5.75h3a1.5 1.5 0 0 0 0-3h-3a1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClipboardMinus);
export default ForwardRef;
