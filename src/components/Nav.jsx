import { nav } from "../styles/nav"
import search from '../icons/search.png'

export const Nav = () => {
  return (
    <nav style={nav.nav_container}>
        <div style={nav.nav_content_container}>
            <h1 style={nav.nav_text}>
                Devon
            </h1>
            <div style={nav.nav_input_container}>
                {/* <img style={nav.nav_icon} src={search} alt="search" />
                <input style={nav.nav_input} placeholder="Busca un articulo" type="text" /> */}
            </div>
        </div>
    </nav>
  )
}
