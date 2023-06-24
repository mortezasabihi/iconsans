import { SVGProps, Ref, forwardRef } from "react";
const SvgDollarsignCircle = (
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
      d="M10.67 8.08h.58v2.42l-.93-.7a.58.58 0 0 1-.24-.47v-.66a.59.59 0 0 1 .59-.59Zm2.08 5.42.93.7a.581.581 0 0 1 .24.47v.66a.59.59 0 0 1-.59.59h-.58V13.5Z"
    />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.42 7a.75.75 0 1 1-1.5 0V8.67a.59.59 0 0 0-.59-.59h-.58v3.55L14.58 13a2.1 2.1 0 0 1 .84 1.67v.66a2.1 2.1 0 0 1-2.09 2.09h-.58V18a.75.75 0 1 1-1.5 0v-.58h-.58a2.1 2.1 0 0 1-2.09-2.09V14a.75.75 0 1 1 1.5 0v1.33a.59.59 0 0 0 .59.59h.58v-3.55L9.42 11a2.1 2.1 0 0 1-.84-1.67v-.66a2.1 2.1 0 0 1 2.09-2.09h.58V6a.75.75 0 1 1 1.5 0v.58h.58a2.1 2.1 0 0 1 2.09 2.09V10Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDollarsignCircle);
export default ForwardRef;
