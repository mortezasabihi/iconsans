import { SVGProps, Ref, forwardRef } from "react";
const SvgNumberSignSquare = (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-9.5 7.31h9m-9 3.38h9m-9-3.38h9m-9 3.38h9M13.69 7.5v9m-3.38-9v9m3.38-9v9m-3.38-9v9"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNumberSignSquare);
export default ForwardRef;
