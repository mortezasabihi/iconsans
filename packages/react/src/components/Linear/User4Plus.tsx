import { SVGProps, Ref, forwardRef } from "react";
const SvgUser4Plus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M19.5 18.25H16M17.75 20v-3.5M12 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.5 20.19A7.51 7.51 0 0 1 16 13.84"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser4Plus);
export default ForwardRef;
