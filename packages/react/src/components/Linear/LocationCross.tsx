import { SVGProps, Ref, forwardRef } from "react";
const SvgLocationCross = (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.49 18.79a3 3 0 0 1-5 0c-4-5.87-3.69-8.71-3.69-8.71a6.18 6.18 0 1 1 12.36 0s.37 2.84-3.67 8.71ZM13.41 8.66l-2.82 2.82m2.82 0-2.82-2.82"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocationCross);
export default ForwardRef;
