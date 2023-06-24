import { SVGProps, Ref, forwardRef } from "react";
const SvgUserSquare1 = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13.6A2.8 2.8 0 1 0 12 8a2.8 2.8 0 0 0 0 5.6Zm-5.75 7.33v-3.55a1.49 1.49 0 0 1 1.48-1.48h8.54a1.49 1.49 0 0 1 1.48 1.48v3.55"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserSquare1);
export default ForwardRef;
