import { SVGProps, Ref, forwardRef } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M14.74 8.36H5.23a2.52 2.52 0 0 0-2.52 2.52v.57a.2.2 0 0 0 .2.2h14.14a.2.2 0 0 0 .2-.2v-.58a2.51 2.51 0 0 0-2.51-2.51Zm2.31 4.79H2.91a.2.2 0 0 0-.2.2v3.82a2.51 2.51 0 0 0 2.51 2.51h9.51a2.52 2.52 0 0 0 2.52-2.52v-3.81a.2.2 0 0 0-.2-.2Z"
    />
    <path
      fill="currentColor"
      d="M21.29 6.83v6.29a2.52 2.52 0 0 1-2.16 2.5.302.302 0 0 1-.33-.31v-6a2.52 2.52 0 0 0-2.52-2.51h-9.2a.29.29 0 0 1-.3-.33 2.5 2.5 0 0 1 2.48-2.15h9.52a2.51 2.51 0 0 1 2.51 2.51Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCards);
export default ForwardRef;
