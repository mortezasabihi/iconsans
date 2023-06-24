import { SVGProps, Ref, forwardRef } from "react";
const SvgTransferHorizentalSquare1 = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-.84 14.16a.74.74 0 0 1-.46.69.74.74 0 0 1-.82-.16L7.23 15a.75.75 0 1 1 1.06-1l1.37 1.38V6.84a.75.75 0 0 1 1.5 0v10.32ZM16.77 10a.74.74 0 0 1-1.06 0l-1.37-1.35v8.51a.75.75 0 1 1-1.5 0V6.84a.75.75 0 0 1 1.28-.53L16.77 9a.74.74 0 0 1 0 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTransferHorizentalSquare1);
export default ForwardRef;
