import Markdown from "markdown-to-jsx"
import { Nav } from "./Nav"
import { useEffect, useState } from "react"
import { Footer } from "./Footer"
import { CodeRender } from "./CodeRender"
import { Emoji } from "./Emojis"

export const Post = ({article='welcome.md'}) => {
 
  const [post, setpost] = useState('')
  const [component, setcomponent] = useState([])

  const getRandomEmoji = () => {
    let emojis = []

    for(let i = 0; i < 100; i++){
      emojis.push('🤓')
      setcomponent(
        [
          emojis
        ]
      )
    }
  }

  useEffect(() => {
    getRandomEmoji()
    console.log(component)
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
            <div style={{
              width: '100%',
              height: 'auto',
              position: 'absolute'
            }}>
            </div>
            <article className="custom-article box-shadow">
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
