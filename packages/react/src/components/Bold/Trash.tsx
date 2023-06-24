import { SVGProps, Ref, forwardRef } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.88 8.89a.69.69 0 0 0-.7.74l.57 8.43a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2l.57-8.43a.69.69 0 0 0-.7-.74H6.88Zm4.37 8.17a.75.75 0 1 1-1.5 0v-4.5a.75.75 0 1 1 1.5 0v4.5Zm3 0a.75.75 0 1 1-1.5 0v-4.5a.75.75 0 1 1 1.5 0v4.5ZM19 7.69H5a.75.75 0 0 1 0-1.5h14a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M14.5 6.94v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTrash);
export default ForwardRef;
