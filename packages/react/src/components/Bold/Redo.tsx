import { SVGProps, Ref, forwardRef } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm5.53 7.68-1.1 1.1a.75.75 0 0 1-.53.22.79.79 0 0 1-.53-.22.76.76 0 0 1-.15-.83H9.37a1.62 1.62 0 0 0 0 3.24h7.13a.75.75 0 1 1 0 1.5H9.37a3.12 3.12 0 1 1 0-6.24h5.91a.74.74 0 0 1 1.15-.93l1.1 1.1a.75.75 0 0 1 0 1.06Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRedo);
export default ForwardRef;
