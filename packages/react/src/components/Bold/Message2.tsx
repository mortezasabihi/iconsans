import { SVGProps, Ref, forwardRef } from "react";
const SvgMessage2 = (
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
      d="M10.79 4.09a7.51 7.51 0 0 0-4.42 12.4.93.93 0 0 1 .21.81l-.53 2.15a.44.44 0 0 0 .62.5l2.5-1.2a.94.94 0 0 1 .64 0 7.52 7.52 0 1 0 1-14.62l-.02-.04ZM9 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessage2);
export default ForwardRef;
