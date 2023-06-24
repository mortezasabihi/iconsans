import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketPlus = (
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
      d="M19.37 11.06H4.63a.298.298 0 0 0-.29.35l1.19 7.11a2.24 2.24 0 0 0 2.21 1.87h8.52a2.24 2.24 0 0 0 2.21-1.87l1.19-7.11a.3.3 0 0 0-.29-.35ZM14 15.92h-1.25v1.25a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25v-1.25a.75.75 0 1 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5ZM18 7h-.89L17 6.74l-1.87-2.8a.74.74 0 0 0-1-.21.75.75 0 0 0-.2 1L15.33 7H8.67l1.45-2.18a.75.75 0 1 0-1.24-.83L6.94 6.84 6.87 7H6a2 2 0 0 0-2 2.31.29.29 0 0 0 .29.25h15.43a.29.29 0 0 0 .28-.25A2 2 0 0 0 18 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasketPlus);
export default ForwardRef;
