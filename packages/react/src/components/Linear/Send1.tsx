import { SVGProps, Ref, forwardRef } from "react";
const SvgSend1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m7.34 15.31 3.77-7.52a1 1 0 0 1 1.78 0l3.77 7.52a1 1 0 0 1-1.34 1.35l-2.87-1.44a1 1 0 0 0-.9 0l-2.87 1.44a1 1 0 0 1-1.34-1.35Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 15v-2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSend1);
export default ForwardRef;
