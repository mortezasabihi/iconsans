import { SVGProps, Ref, forwardRef } from "react";
const SvgScan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM6.82 9.46a2.64 2.64 0 0 1 2.64-2.64h1a.6.6 0 0 1 0 1.2h-1A1.43 1.43 0 0 0 8 9.46v1a.6.6 0 0 1-1.2 0l.02-1Zm3.65 7.72h-1a2.64 2.64 0 0 1-2.64-2.64v-1a.6.6 0 0 1 1.2 0v1A1.43 1.43 0 0 0 9.46 16h1a.6.6 0 0 1 0 1.2l.01-.02Zm6.71-2.64a2.64 2.64 0 0 1-2.64 2.64h-1a.6.6 0 0 1 0-1.2h1A1.43 1.43 0 0 0 16 14.54v-1a.6.6 0 0 1 1.2 0l-.02 1Zm-.6-1.94H7.42a.6.6 0 1 1 0-1.2h9.16a.6.6 0 0 1 0 1.2Zm.6-2.13a.6.6 0 1 1-1.2 0v-1A1.431 1.431 0 0 0 14.54 8h-1a.6.6 0 0 1 0-1.2h1a2.64 2.64 0 0 1 2.64 2.64v1.03Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgScan);
export default ForwardRef;
