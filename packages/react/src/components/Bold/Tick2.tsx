import { SVGProps, Ref, forwardRef } from "react";
const SvgTick2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m20.65 10.94-1.78-1.78V6.63a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.78a1.49 1.49 0 0 0-2.12 0L9.16 5.13H6.63a1.5 1.5 0 0 0-1.5 1.5v2.53l-1.78 1.78a1.49 1.49 0 0 0 0 2.12l1.78 1.78v2.53a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.53l1.78-1.78a1.49 1.49 0 0 0 0-2.12Zm-4.53-.88L11.19 15a.74.74 0 0 1-.53.22.71.71 0 0 1-.53-.22l-2.25-2.25a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.72 1.72L15.06 9a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTick2);
export default ForwardRef;
