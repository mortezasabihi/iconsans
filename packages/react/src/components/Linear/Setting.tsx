import { SVGProps, Ref, forwardRef } from "react";
const SvgSetting = (
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
      strokeWidth={1.69}
      d="M19.87 10H19a1 1 0 0 1-.67-1.61l.6-.6a1.12 1.12 0 0 0 0-1.59L17.77 5a1.12 1.12 0 0 0-1.59 0l-.6.6A1 1 0 0 1 14 5v-.88A1.12 1.12 0 0 0 12.84 3h-1.68A1.12 1.12 0 0 0 10 4.12V5a1 1 0 0 1-1.61.67L7.82 5a1.12 1.12 0 0 0-1.59 0L5 6.23a1.12 1.12 0 0 0 0 1.59l.6.6A1 1 0 0 1 5 10h-.87A1.12 1.12 0 0 0 3 11.16v1.68A1.12 1.12 0 0 0 4.12 14H5a1 1 0 0 1 .67 1.61l-.6.6a1.12 1.12 0 0 0 0 1.59L6.23 19a1.12 1.12 0 0 0 1.59 0l.6-.6A1 1 0 0 1 10 19v.84A1.12 1.12 0 0 0 11.16 21h1.68A1.119 1.119 0 0 0 14 19.88V19a1 1 0 0 1 1.61-.67l.6.6a1.12 1.12 0 0 0 1.59 0l1.2-1.16a1.12 1.12 0 0 0 0-1.59l-.6-.6A1 1 0 0 1 19 14h.85A1.12 1.12 0 0 0 21 12.84v-1.68A1.12 1.12 0 0 0 19.87 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.69}
      d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSetting);
export default ForwardRef;
