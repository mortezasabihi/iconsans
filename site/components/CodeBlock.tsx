import { type PropsWithChildren, useRef, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const CodeBlock: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, [ref]);

  return (
    <pre>
      <code ref={ref}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
