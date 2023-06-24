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
      fill="currentColor"
      d="M21 8.11v.74a.4.4 0 0 1-.4.4H3.4a.4.4 0 0 1-.4-.4v-.74A3.11 3.11 0 0 1 6.11 5h11.78A3.11 3.11 0 0 1 21 8.11ZM3.4 10.75h17.2a.4.4 0 0 1 .4.4v4.74A3.11 3.11 0 0 1 17.89 19H6.11A3.11 3.11 0 0 1 3 15.89v-4.74a.4.4 0 0 1 .4-.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
