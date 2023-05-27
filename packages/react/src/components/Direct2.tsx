import { SVGProps, Ref, forwardRef } from "react";
const SvgDirect2 = (
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
      d="m16.66 8.69-3.77 7.52a1 1 0 0 1-1.78 0L7.34 8.69a1 1 0 0 1 1.34-1.35l2.87 1.44a1 1 0 0 0 .9 0l2.87-1.44a1 1 0 0 1 1.34 1.35Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDirect2);
export default ForwardRef;
