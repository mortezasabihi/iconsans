import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferHorizental = (
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
      d="m14.4 17.02 3.6-3.6H6m3.6-6.44L6 10.58h12"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferHorizental);
export default ForwardRef;
