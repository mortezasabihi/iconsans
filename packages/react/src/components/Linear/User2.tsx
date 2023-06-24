import { SVGProps, Ref, forwardRef } from "react";
const SvgUser2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.56 3H6.44a1.94 1.94 0 0 0-1.94 1.94v3.62A1.94 1.94 0 0 0 6.44 20h11.12a1.94 1.94 0 0 0 1.94-1.94v-3.62a1.94 1.94 0 0 0-1.94-1.94Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser2);
export default ForwardRef;
