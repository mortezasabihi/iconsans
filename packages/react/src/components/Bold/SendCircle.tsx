import { SVGProps, Ref, forwardRef } from "react";
const SvgSendCircle = (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.29 9.71a.75.75 0 1 1-1.5 0v-2.43L9 16.07a.71.71 0 0 1-.53.22.74.74 0 0 1-.53-.22.75.75 0 0 1 0-1.06l5.8-5.79h-2.45a.75.75 0 1 1 0-1.5h4.25a.71.71 0 0 1 .28.06.73.73 0 0 1 .41.4c.04.091.06.19.06.29v4.24Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSendCircle);
export default ForwardRef;
