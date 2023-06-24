import { SVGProps, Ref, forwardRef } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.346 4.829 2.828 2.828a1 1 0 0 1 0 1.415l-1.046 1.046a.2.2 0 0 1-.283 0l-3.967-3.967a.2.2 0 0 1 0-.283l1.046-1.046a1 1 0 0 1 1.415 0l.007.007Zm.424 6.351-4-4a.19.19 0 0 0-.28 0l-1.58 1.66-6.09 6.09a1 1 0 0 0-.29.71v2.83a1 1 0 0 0 1 1h2.83a1.001 1.001 0 0 0 .71-.3l6.08-6.09 1.62-1.62a.19.19 0 0 0 0-.28Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;
