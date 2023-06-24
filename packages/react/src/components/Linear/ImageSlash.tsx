import { SVGProps, Ref, forwardRef } from "react";
const SvgImageSlash = (
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
      d="M4.12 19.77A4 4 0 0 1 3 17V7a4 4 0 0 1 4-4h10a4 4 0 0 1 2.75 1.1M21 7v10a4 4 0 0 1-4 4H8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.19 16a2 2 0 0 0 2.22-.41L21 9M3 17l3.59-3.59a2 2 0 0 1 2.82 0M22 2 2 22"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgImageSlash);
export default ForwardRef;
