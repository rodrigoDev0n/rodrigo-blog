import Markdown from "markdown-to-jsx"
import { Nav } from "./Nav"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"

export const Post = () => {
 
  const [post, setpost] = useState('')

  useEffect(() => {
    import('../post/welcome.md')
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
            justifyContent: 'center',
            marginTop: '50px'
        }}>
            <article className="custom-article">
                <Markdown>
                    {post}
                </Markdown>
            </article>
        </section>
        <Footer position={false} />
    </>
  )
}
