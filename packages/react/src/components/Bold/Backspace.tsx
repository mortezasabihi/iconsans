import { SVGProps, Ref, forwardRef } from "react";
const SvgBackspace = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.36 7H8a2 2 0 0 0-1.56.75l-2.4 3a2 2 0 0 0 0 2.5l2.4 3A2 2 0 0 0 8 17h10.36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-2.76 6.5a.75.75 0 0 1-1.06 1.06L13 13.06l-1.51 1.5a.75.75 0 0 1-1.06-1.06L12 12l-1.51-1.51a.75.75 0 0 1 1.06-1.06L13 10.94l1.5-1.51a.75.75 0 0 1 1.06 1.06L14.1 12l1.5 1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBackspace);
export default ForwardRef;
