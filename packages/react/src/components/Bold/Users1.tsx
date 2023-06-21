import { SVGProps, Ref, forwardRef } from "react";
const SvgUsers1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.14 11.1a2.71 2.71 0 1 0 0-5.42 2.71 2.71 0 0 0 0 5.42Zm4.39 2.7H5.76a2.38 2.38 0 0 0-2.38 2.38v.24a2.38 2.38 0 0 0 2.38 2.38h8.77a2.38 2.38 0 0 0 2.38-2.38v-.24a2.38 2.38 0 0 0-2.38-2.38Zm1.23-1.63a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62Zm1.58 5.95a2.36 2.36 0 0 0 .66-1.65 2.329 2.329 0 0 0-.31-1.18.309.309 0 0 1 .1-.422.31.31 0 0 1 .15-.048h1.58a2 2 0 0 1 1.95 1.5 2 2 0 0 1-.47 1.91 1.849 1.849 0 0 1-1.35.58h-2.29a.3.3 0 0 1-.29-.3.261.261 0 0 1 .09-.21l.18-.18Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUsers1);
export default ForwardRef;
