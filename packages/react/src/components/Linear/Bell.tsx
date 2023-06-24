import { SVGProps, Ref, forwardRef } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 17.5a1.5 1.5 0 0 1-1.25 1.5H6.25A1.5 1.5 0 0 1 5 17.5 1.49 1.49 0 0 1 6.25 16v-5.75a5.75 5.75 0 1 1 11.5 0V16A1.49 1.49 0 0 1 19 17.5ZM10 21h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.82 4.57a1 1 0 0 0-.113-1.277A1 1 0 0 0 11.18 4.57"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBell);
export default ForwardRef;
