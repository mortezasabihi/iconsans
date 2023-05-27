import { SVGProps, Ref, forwardRef } from "react";
const SvgVideoSlash = (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 19H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2m6-2v8.9a1.2 1.2 0 0 1-2.05.85L16 13.8V16a3 3 0 0 1-3 3h-2M22 4 4 22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVideoSlash);
export default ForwardRef;
