import { SVGProps, Ref, forwardRef } from "react";
const SvgArrowUp = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6v12M8.4 9.6 12 6l3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
