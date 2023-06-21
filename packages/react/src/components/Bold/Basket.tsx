import { SVGProps, Ref, forwardRef } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.87 11.13H5.13a.28.28 0 0 0-.28.32L6 18.09a2.08 2.08 0 0 0 2 1.74h8a2.08 2.08 0 0 0 2-1.74l1.12-6.64a.281.281 0 0 0-.25-.32Zm-8 5.7a.7.7 0 1 1-1.39 0V13.1a.7.7 0 1 1 1.39 0v3.73Zm3.73 0a.7.7 0 1 1-1.39 0V13.1a.7.7 0 1 1 1.39 0v3.73Zm3.02-9.54h-.83l-.13-.2-1.75-2.61a.69.69 0 0 0-1-.19.7.7 0 0 0-.19 1l1.35 2H8.9l1.35-2a.7.7 0 0 0-1.16-.78L7.28 7.19l-.07.1h-.83a1.88 1.88 0 0 0-1.85 2.2.28.28 0 0 0 .27.24h14.4a.28.28 0 0 0 .27-.24 1.88 1.88 0 0 0-1.85-2.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasket);
export default ForwardRef;
