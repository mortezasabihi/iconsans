import { SVGProps, Ref, forwardRef } from "react";
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.89 5H6.11A3.11 3.11 0 0 0 3 8.11v7.78A3.11 3.11 0 0 0 6.11 19h11.78A3.11 3.11 0 0 0 21 15.89V8.11A3.11 3.11 0 0 0 17.89 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 10h18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
