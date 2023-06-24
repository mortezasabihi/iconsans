import { SVGProps, Ref, forwardRef } from "react";
const SvgClipboardTick = (
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
      d="M16.3 4.26a.31.31 0 0 0-.32.29 2.49 2.49 0 0 1-2.48 2.2h-3A2.49 2.49 0 0 1 8 4.55a.31.31 0 0 0-.32-.29 3 3 0 0 0-2.7 3v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-11a3 3 0 0 0-2.68-3Zm-.77 7.27-3.75 3.75a.739.739 0 0 1-.53.22.708.708 0 0 1-.53-.22L9 13.57a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.18 1.18 3.22-3.22a.75.75 0 0 1 1.06 1.06h.01Z"
    />
    <path
      fill="currentColor"
      d="M10.5 5.75h3a1.5 1.5 0 0 0 0-3h-3a1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClipboardTick);
export default ForwardRef;
