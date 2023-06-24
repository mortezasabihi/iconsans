import { SVGProps, Ref, forwardRef } from "react";
const SvgSort1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 15.25H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm0-4h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5Zm-8-2.5h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5Zm-4.73 4.78a.779.779 0 0 0 .53.22.749.749 0 0 0 .53-.22l1.8-1.8a.75.75 0 1 0-1.06-1.06l-.52.52V8a.75.75 0 0 0-1.5 0v3.19l-.52-.52a.75.75 0 1 0-1.06 1.06l1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort1);
export default ForwardRef;
