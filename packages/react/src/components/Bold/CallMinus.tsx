import { SVGProps, Ref, forwardRef } from "react";
const SvgCallMinus = (
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
      fill="currentColor"
      d="M17.71 13.78a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.218 4.218 0 0 0 6 0L20 17.53A1.049 1.049 0 0 0 20 16l-2.29-2.22ZM20 5.25h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallMinus);
export default ForwardRef;
