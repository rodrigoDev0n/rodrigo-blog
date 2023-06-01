import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"

export const CodeRender = ({children}) => {
  return (
    <div className="code">
        <SyntaxHighlighter 
            language="javascript"
            style={materialDark}
        >
            {children}
        </SyntaxHighlighter>
    </div>
  )
}
