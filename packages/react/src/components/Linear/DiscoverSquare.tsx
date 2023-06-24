import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscoverSquare = (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.65 8.53 15 7.27A1.47 1.47 0 0 1 16.73 9l-1.26 5.31a1.52 1.52 0 0 1-1.12 1.12L9 16.73A1.47 1.47 0 0 1 7.27 15l1.26-5.35a1.52 1.52 0 0 1 1.12-1.12Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 13.36a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscoverSquare);
export default ForwardRef;
