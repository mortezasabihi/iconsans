import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 20.19a7.5 7.5 0 0 1 15 0"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4);
export default ForwardRef;
