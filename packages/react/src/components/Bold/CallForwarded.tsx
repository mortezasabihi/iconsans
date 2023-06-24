import { SVGProps, Ref, forwardRef } from "react";
const SvgCallForwarded = (
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
      d="M17.71 13.78a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.22 4.22 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16l-2.29-2.22Zm4.07-8.29a.72.72 0 0 0-.06-.29.63.63 0 0 0-.16-.2l-2.11-2.15a.75.75 0 0 0-1.06 1.06l.83.83H14a.75.75 0 1 0 0 1.5h5.24l-.83.84a.74.74 0 0 0 0 1.06.77.77 0 0 0 .53.22.79.79 0 0 0 .53-.22L21.56 6a.63.63 0 0 0 .16-.24.72.72 0 0 0 .06-.27Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCallForwarded);
export default ForwardRef;
