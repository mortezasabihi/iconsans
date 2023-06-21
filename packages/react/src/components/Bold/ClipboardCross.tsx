import { SVGProps, Ref, forwardRef } from "react";
const SvgClipboardCross = (
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
      d="M16.3 4.26a.31.31 0 0 0-.32.29 2.49 2.49 0 0 1-2.48 2.2h-3A2.49 2.49 0 0 1 8 4.55a.31.31 0 0 0-.32-.29 3 3 0 0 0-2.7 3v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-11a3 3 0 0 0-2.68-3Zm-2.36 9.62a.74.74 0 0 1 0 1.06.71.71 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.88-.88-.88.88a.74.74 0 0 1-.53.22.71.71 0 0 1-.53-.22.74.74 0 0 1 0-1.06l.88-.88-.88-.88a.753.753 0 0 1 1.06-1.07l.88.89.88-.89a.753.753 0 1 1 1.06 1.07l-.88.88.88.88Z"
    />
    <path
      fill="currentColor"
      d="M10.5 5.75h3a1.5 1.5 0 0 0 0-3h-3a1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClipboardCross);
export default ForwardRef;
