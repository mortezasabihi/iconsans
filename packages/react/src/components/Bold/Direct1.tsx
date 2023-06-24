import { SVGProps, Ref, forwardRef } from "react";
const SvgDirect1 = (
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
      d="m7.34 15.31 3.77-7.52a1 1 0 0 1 1.78 0l3.77 7.52a1 1 0 0 1-1.34 1.35l-2.87-1.44a1 1 0 0 0-.9 0l-2.87 1.44a1 1 0 0 1-1.34-1.35Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirect1);
export default ForwardRef;
