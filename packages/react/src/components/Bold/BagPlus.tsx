import { SVGProps, Ref, forwardRef } from "react";
const SvgBagPlus = (
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
      d="M15.89 8h-.74V6.4a3.15 3.15 0 0 0-6.3 0V8h-.74a2 2 0 0 0-2 2.33l1.33 8a2 2 0 0 0 2 1.67h5.12a2 2 0 0 0 2-1.67l1.33-8a2.001 2.001 0 0 0-2-2.33Zm-5.54-1.6a1.649 1.649 0 0 1 2.817-1.167A1.652 1.652 0 0 1 13.65 6.4V8h-3.3V6.4ZM14 14.75h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 1 1 0-1.5h1.25V12a.75.75 0 1 1 1.5 0v1.25H14a.75.75 0 0 1 0 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBagPlus);
export default ForwardRef;
