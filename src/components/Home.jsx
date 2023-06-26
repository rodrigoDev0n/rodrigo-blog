import { articles } from "../helpers/post-data"
import { home } from "../styles/home"
import { ArticlesCard } from "./ArticlesCard"
import { Footer } from "./Footer"
import { Nav } from "./Nav"

export const Home = () => {
  return (
    <>
        <Nav />
        <section  style={home.home_container}>
            <section style={home.home_article_container}>
                <header>
                    <h1 style={home.home_text}>Ultimos Articulos</h1>
                </header>
                <ArticlesCard />
                {
                  articles.map(({title, date, route}) => (
                    <ArticlesCard
                      key={title}
                      title={title}
                      date={date}
                      route={route}
                    />
                  ))
                }
            </section>
        </section>
        <Footer />
    </>
  )
}
