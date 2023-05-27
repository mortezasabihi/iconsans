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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm0 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM14 8h5m-2.5-2.5v5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCategoru2Plus);
export default ForwardRef;
