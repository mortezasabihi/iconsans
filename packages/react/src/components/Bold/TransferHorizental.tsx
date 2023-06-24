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
      fill="currentColor"
      d="M19 13.41H5a.75.75 0 1 0 0 1.5h12.19l-2.32 2.32a.75.75 0 0 0 1.06 1.06l3.6-3.6a.76.76 0 0 0 .16-.82.74.74 0 0 0-.69-.46ZM5 10.59h14a.75.75 0 1 0 0-1.5H6.81l2.32-2.32a.75.75 0 1 0-1.06-1.06l-3.6 3.6A.75.75 0 0 0 5 10.59Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferHorizental);
export default ForwardRef;
