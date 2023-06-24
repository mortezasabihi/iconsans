import { SVGProps, Ref, forwardRef } from "react";
const SvgVolumePlus = (
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
      d="M2.66 16.2v-9a1.5 1.5 0 0 1 1.5-1.5h1.9a2 2 0 0 0 1.1-.33l3.17-2.11a1.5 1.5 0 0 1 2.33 1.24v14.4a1.5 1.5 0 0 1-2.33 1.25L7.16 18a2 2 0 0 0-1.1-.34h-1.9a1.5 1.5 0 0 1-1.5-1.46Zm18.68-4.75h-2.08V9.37a.75.75 0 1 0-1.5 0v2.08h-2.08a.75.75 0 1 0 0 1.5h2.08V15a.75.75 0 1 0 1.5 0v-2h2.08a.75.75 0 1 0 0-1.5v-.05Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumePlus);
export default ForwardRef;
