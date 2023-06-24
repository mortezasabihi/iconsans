import { SVGProps, Ref, forwardRef } from "react";
const SvgPlayCircle = (
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
      d="m15.24 10.68-4-2.28A1.52 1.52 0 0 0 9 9.72v4.56a1.52 1.52 0 0 0 2.28 1.32l4-2.28a1.53 1.53 0 0 0-.04-2.64Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlayCircle);
export default ForwardRef;
