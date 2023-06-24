import { SVGProps, Ref, forwardRef } from "react";
const SvgUserCircle1 = (
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
      d="M12 13.6A2.8 2.8 0 1 0 12 8a2.8 2.8 0 0 0 0 5.6Z"
    />
    <path
      fill="currentColor"
      d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm5.75 15.65v-.52a1.49 1.49 0 0 0-1.48-1.48H7.74a1.49 1.49 0 0 0-1.49 1.48v.52a8.25 8.25 0 1 1 11.5 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCircle1);
export default ForwardRef;
