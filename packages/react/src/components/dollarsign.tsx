import { SVGProps, Ref, forwardRef } from "react";
const SvgDollarsign = (
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
      d="M16 9V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 .8 1.6l6.4 4.8A2 2 0 0 1 16 16v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2m4-12v18"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDollarsign);
export default ForwardRef;
