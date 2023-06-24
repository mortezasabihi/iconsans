import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.03 9.94a2.74 2.74 0 1 0 0-5.48 2.74 2.74 0 0 0 0 5.48Zm5.08 2.75H4.94a1.77 1.77 0 0 0-1.77 1.77v3.32c0 .977.792 1.77 1.77 1.77h10.17a1.77 1.77 0 0 0 1.77-1.77v-3.32a1.77 1.77 0 0 0-1.77-1.77Zm1.06-1.63a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Zm4.83 4.4v2.66a1.43 1.43 0 0 1-1.42 1.42h-1.85a.16.16 0 0 1-.16-.16.16.16 0 0 1 .1-.14 1.78 1.78 0 0 0 .78-1.47v-3.43a.294.294 0 0 1 .085-.215.29.29 0 0 1 .215-.085h.83A1.43 1.43 0 0 1 21 15.46Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers2);
export default ForwardRef;
