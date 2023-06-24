import { SVGProps, Ref, forwardRef } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 4V2M6.34 6.34 4.93 4.93M4 12H2m4.34 5.66-1.41 1.41M12 20v2m5.66-4.34 1.41 1.41M20 12h2m-4.34-5.66 1.41-1.41"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSun);
export default ForwardRef;
