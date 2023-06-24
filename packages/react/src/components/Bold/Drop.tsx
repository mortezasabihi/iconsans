import { SVGProps, Ref, forwardRef } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17 14.56a5 5 0 0 1-10 0c0-2.33 3.54-8.15 4.66-9.93a.4.4 0 0 1 .68 0c1.12 1.78 4.66 7.6 4.66 9.93Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDrop);
export default ForwardRef;
