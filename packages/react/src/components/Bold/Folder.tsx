import { SVGProps, Ref, forwardRef } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 16.5v-9a2 2 0 0 1 2-2h4.17a2 2 0 0 1 1.42.59l1.82 1.82a2 2 0 0 0 1.42.59H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgFolder);
export default ForwardRef;
