import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.81 20.19a.31.31 0 0 1-.3-.32 7.5 7.5 0 0 1 15 0 .308.308 0 0 1-.182.293.31.31 0 0 1-.118.027H3.81Zm13.15-8.53a2.45 2.45 0 1 0 0-4.9 2.45 2.45 0 0 0 0 4.9Zm5.59 8.23a.25.25 0 0 1-.25.25h-2.16A.16.16 0 0 1 20 20v-.17a8.31 8.31 0 0 0-1.58-4.87.3.3 0 0 1 .35-.46 6.13 6.13 0 0 1 3.78 5.39Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers4);
export default ForwardRef;
