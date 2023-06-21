import { SVGProps, Ref, forwardRef } from "react";
const SvgBasketCross = (
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
      d="M18.87 11.13H5.13a.28.28 0 0 0-.27.32L6 18.09a2.08 2.08 0 0 0 2 1.74h8a2.08 2.08 0 0 0 2-1.74l1.11-6.64a.278.278 0 0 0-.136-.284.281.281 0 0 0-.104-.036Zm-5.06 4.65a.689.689 0 0 1 0 1 .668.668 0 0 1-.49.21.699.699 0 0 1-.5-.21L12 16l-.82.82a.701.701 0 0 1-.767.156.67.67 0 0 1-.223-.156.69.69 0 0 1 0-1L11 15l-.82-.83a.69.69 0 0 1 0-1 .71.71 0 0 1 1 0L12 14l.82-.83a.71.71 0 0 1 1 0 .689.689 0 0 1 0 1L13 15l.81.78Zm3.81-8.49h-.83l-.13-.2-1.75-2.61a.69.69 0 0 0-1-.19.7.7 0 0 0-.19 1l1.35 2H8.9l1.35-2a.7.7 0 0 0-1.16-.78L7.28 7.19l-.07.1h-.83a1.88 1.88 0 0 0-1.85 2.2.28.28 0 0 0 .27.24h14.4a.28.28 0 0 0 .27-.24 1.88 1.88 0 0 0-1.85-2.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBasketCross);
export default ForwardRef;
