import { SVGProps, Ref, forwardRef } from "react";
const SvgMessageNew2 = (
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
      d="M18.42 8.52a3.49 3.49 0 0 1-5.55-4.07.3.3 0 0 0-.25-.45 8.09 8.09 0 0 0-1.83.06 7.51 7.51 0 0 0-4.42 12.4.93.93 0 0 1 .21.81l-.53 2.15a.44.44 0 0 0 .62.5l2.5-1.2a.94.94 0 0 1 .64 0A7.52 7.52 0 0 0 19.39 13a7.44 7.44 0 0 0-.47-4.36.31.31 0 0 0-.5-.12ZM9 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path fill="currentColor" d="M16 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessageNew2);
export default ForwardRef;
