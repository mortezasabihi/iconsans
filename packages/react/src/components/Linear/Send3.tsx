import { SVGProps, Ref, forwardRef } from "react";
const SvgSend3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.69 7.34 7.52 3.77a.999.999 0 0 1 0 1.78l-7.52 3.77a1 1 0 0 1-1.35-1.34l1.44-2.87a1 1 0 0 0 0-.9L7.34 8.68a1 1 0 0 1 1.35-1.34Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 12h2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSend3);
export default ForwardRef;
