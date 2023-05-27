import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferVertical = (
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
      d="m6.98 14.4 3.6 3.6V6m6.44 3.6L13.42 6v12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferVertical);
export default ForwardRef;
