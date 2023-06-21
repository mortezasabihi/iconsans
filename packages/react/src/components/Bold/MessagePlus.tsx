import { SVGProps, Ref, forwardRef } from "react";
const SvgMessagePlus = (
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
      d="M18.9 9.5a3.54 3.54 0 0 1-3.55-2.88 3.58 3.58 0 0 1 .15-1.79.311.311 0 0 0-.3-.4H8a3 3 0 0 0-3 3v5.85a3 3 0 0 0 2.21 2.89 1 1 0 0 1 .79 1v1.93a.5.5 0 0 0 .85.36l2.84-2.84a1 1 0 0 1 .7-.29h5.21a3 3 0 0 0 3-3V9.49a.3.3 0 0 0-.41-.28 3.25 3.25 0 0 1-1.29.29Zm-9.1 1.78a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
    <path
      fill="currentColor"
      d="M19.3 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm.83 2.94h-.39v.39a.44.44 0 0 1-.88 0v-.39h-.39a.44.44 0 1 1 0-.88h.39v-.39a.44.44 0 0 1 .88 0v.39h.39a.44.44 0 1 1 0 .88Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMessagePlus);
export default ForwardRef;
