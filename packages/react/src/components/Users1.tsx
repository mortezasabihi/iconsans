import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.14 11.1a2.71 2.71 0 1 0 0-5.42 2.71 2.71 0 0 0 0 5.42Zm4.4-4.96a2.26 2.26 0 0 1 0 4.51m.12 3.15H5.63a2.25 2.25 0 0 0-2.25 2.25v.01a2.25 2.25 0 0 0 2.25 2.25h9.03a2.25 2.25 0 0 0 2.25-2.25v-.01a2.25 2.25 0 0 0-2.25-2.25Zm4.06.26a2 2 0 0 1 0 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers1);
export default ForwardRef;
