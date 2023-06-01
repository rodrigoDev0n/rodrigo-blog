import Markdown from "markdown-to-jsx"
import { Nav } from "./Nav"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { CodeRender } from "./CodeRender"
export const Post = ({article='welcome.md'}) => {
 
  const [post, setpost] = useState('')

  useEffect(() => {
    import(`../post/${article}`)
        .then(res => res.default)
        .then(res => {
            fetch(res)
                .then(res => res.text())
                .then(res => setpost(res))
        })
  }, [])
  
  return (
    <>
        <Nav />
        <section style={{
            width: '100%',
            display: 'flex',
            minHeight: '100vh',
            justifyContent: 'center',
            marginTop: '50px'
        }}>
            <article className="custom-article">
                <Markdown options={{
                    overrides: {
                        Code: {
                            component: CodeRender
                        }
                    }
                }}>
                    {post}
                </Markdown>
            </article>
        </section>
        <Footer position={false} />
    </>
  )
}
