import { SVGProps, Ref, forwardRef } from "react";
const SvgStarSplash = (
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
      d="M19.16 9.28a1.5 1.5 0 0 1 .27 2.36l-2.06 2a1.49 1.49 0 0 0-.43 1.36l.48 2.84a1.5 1.5 0 0 1-2.17 1.58l-2.55-1.36a1.51 1.51 0 0 0-1.4 0L8.75 19.4M6.72 17l.34-2a1.49 1.49 0 0 0-.43-1.33l-2.06-2a1.5 1.5 0 0 1 .83-2.59l2.85-.41a1.5 1.5 0 0 0 1.13-.82l1.27-2.59a1.51 1.51 0 0 1 2.7 0l1.27 2.59c.11.215.268.403.46.55m5.17-4.65-16.5 16.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgStarSplash);
export default ForwardRef;
