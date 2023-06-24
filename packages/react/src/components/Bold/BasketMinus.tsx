import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketMinus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M18.87 11.13H5.13a.28.28 0 0 0-.27.32L6 18.09a2.08 2.08 0 0 0 2 1.74h8a2.08 2.08 0 0 0 2-1.74l1.11-6.64a.28.28 0 0 0-.24-.32Zm-5 4.53h-3.74a.7.7 0 0 1 0-1.4h3.74a.7.7 0 1 1 0 1.4Zm3.75-8.37h-.83l-.13-.2-1.75-2.61a.69.69 0 0 0-1-.19.7.7 0 0 0-.19 1l1.35 2H8.9l1.35-2a.7.7 0 0 0-1.16-.78L7.28 7.19l-.07.1h-.83a1.88 1.88 0 0 0-1.85 2.2.28.28 0 0 0 .27.24h14.4a.28.28 0 0 0 .27-.24 1.88 1.88 0 0 0-1.85-2.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasketMinus);
export default ForwardRef;
