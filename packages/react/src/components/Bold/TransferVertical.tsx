import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferVertical = (
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
      d="M9.84 4.25a.76.76 0 0 0-.75.75v12.19l-2.32-2.32a.75.75 0 1 0-1.06 1.06l3.6 3.6a.74.74 0 0 0 .82.16.73.73 0 0 0 .46-.69V5a.75.75 0 0 0-.75-.75Zm8.45 3.82-3.6-3.6a.76.76 0 0 0-.82-.16.74.74 0 0 0-.46.69v14a.75.75 0 1 0 1.5 0V6.81l2.32 2.32a.75.75 0 0 0 1.06-1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferVertical);
export default ForwardRef;
