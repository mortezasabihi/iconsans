import { SVGProps, Ref, forwardRef } from "react";
const SvgPercent2 = (
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
      d="m20.65 10.94-1.78-1.78V6.63a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.78a1.49 1.49 0 0 0-2.12 0L9.16 5.13H6.63a1.5 1.5 0 0 0-1.5 1.5v2.53l-1.78 1.78a1.49 1.49 0 0 0 0 2.12l1.78 1.78v2.53a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.53l1.78-1.78a1.49 1.49 0 0 0 0-2.12ZM8.67 8.5a1 1 0 0 1 .07-.38A1.19 1.19 0 0 1 9 7.79a1 1 0 0 1 .9-.27.6.6 0 0 1 .19.06c.062.02.119.05.17.09l.15.12a1.001 1.001 0 0 1 0 1.42 1 1 0 0 1-.32.22 1 1 0 0 1-1.31-.55 1 1 0 0 1-.11-.38Zm1.62 7.41a.74.74 0 0 1-1.04.21.75.75 0 0 1-.21-1l4.67-7a.76.76 0 0 1 1.29.8l-4.71 6.99Zm5 0a1.19 1.19 0 0 1-.22.33.999.999 0 0 1-.32.21 1 1 0 0 1-.94-1.75.56.56 0 0 1 .17-.09c.06-.03.124-.05.19-.06a1 1 0 0 1 1.19 1 1 1 0 0 1-.1.33l.03.03Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPercent2);
export default ForwardRef;
