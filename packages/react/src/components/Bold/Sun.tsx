import { SVGProps, Ref, forwardRef } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-12.75a.76.76 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v2a.76.76 0 0 1-.75.75ZM6.34 7.09a.74.74 0 0 1-.53-.22L4.4 5.46A.75.75 0 1 1 5.46 4.4l1.41 1.41a.74.74 0 0 1 0 1.06.71.71 0 0 1-.53.22ZM4 12.75H2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Zm.93 7.07a.73.73 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.41-1.41a.75.75 0 0 1 1.06 1.06L5.46 19.6a.74.74 0 0 1-.53.22ZM12 22.75a.76.76 0 0 1-.75-.75v-2a.75.75 0 1 1 1.5 0v2a.76.76 0 0 1-.75.75Zm7.07-2.93a.74.74 0 0 1-.53-.22l-1.41-1.41a.75.75 0 0 1 1.06-1.06l1.41 1.41a.75.75 0 0 1-.53 1.28ZM22 12.75h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Zm-4.34-5.66a.71.71 0 0 1-.53-.22.74.74 0 0 1 0-1.06l1.41-1.41a.75.75 0 1 1 1.06 1.06l-1.41 1.41a.74.74 0 0 1-.53.22Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSun);
export default ForwardRef;
