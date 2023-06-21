import { SVGProps, Ref, forwardRef } from "react";
const SvgSheildCross = (
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
      d="m19 6.66-6.08-3.51a1.83 1.83 0 0 0-1.84 0L5 6.66a2 2 0 0 0-1 1.73 14 14 0 0 0 7 12.13l.5.29a1 1 0 0 0 1 0l.5-.29a14 14 0 0 0 7-12.13 2 2 0 0 0-1-1.73Zm-4.7 6.08a.75.75 0 0 1 0 1.06.79.79 0 0 1-.53.22.77.77 0 0 1-.53-.22L12 12.56l-1.24 1.24a.77.77 0 0 1-.53.22.79.79 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.24-1.24-1.24-1.24a.75.75 0 0 1 1.06-1.06L12 10.44l1.24-1.24a.75.75 0 0 1 1.06 1.06l-1.24 1.24 1.24 1.24Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSheildCross);
export default ForwardRef;
