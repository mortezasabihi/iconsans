import { SVGProps, Ref, forwardRef } from "react";
const SvgRecordCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 12.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRecordCircle);
export default ForwardRef;
