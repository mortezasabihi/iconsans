import { SVGProps, Ref, forwardRef } from "react";
const SvgDiscoverCircle = (
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
      d="M13.08 10.92a1.53 1.53 0 1 1-2.161 2.168 1.53 1.53 0 0 1 2.161-2.168Z"
    />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4.73 6-1.26 5.31a1.49 1.49 0 0 1-1.12 1.12L9 16.73A1.46 1.46 0 0 1 7.27 15l1.26-5.35a1.51 1.51 0 0 1 1.12-1.11L15 7.28A1.46 1.46 0 0 1 16.73 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscoverCircle);
export default ForwardRef;
