import { SVGProps, Ref, forwardRef } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m3.45 8.2 5-3.33a1 1 0 0 1 1.1 0l4.9 3.26a1 1 0 0 0 1.1 0l3.9-2.59a1 1 0 0 1 1.55.83V15a1 1 0 0 1-.45.84l-5 3.33a1 1 0 0 1-1.1 0l-4.9-3.26a1 1 0 0 0-1.1 0l-3.9 2.59A1 1 0 0 1 3 17.63V9a1 1 0 0 1 .45-.8ZM9 4.7v11m6-7.4v11"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMap);
export default ForwardRef;
