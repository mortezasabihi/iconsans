import { SVGProps, Ref, forwardRef } from "react";
const SvgUser1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5 3H7a2.5 2.5 0 0 0 0 5h10a2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser1);
export default ForwardRef;
