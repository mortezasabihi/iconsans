import { SVGProps, Ref, forwardRef } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m17.657 8.154 2.432 2.432a2 2 0 0 1 0 2.829l-2.432 2.432a8 8 0 0 1-11.314 0l-2.432-2.432a2 2 0 0 1 0-2.829l2.432-2.432a8 8 0 0 1 11.314 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
