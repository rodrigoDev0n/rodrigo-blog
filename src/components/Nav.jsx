import { nav } from "../styles/nav"
import search from '../icons/search.png'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Nav = () => {

  const [customclassName, setcustomclassName] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = () => {
    navigate('/')
  }


  useEffect(() => {
    if(location.pathname === '/') {
      setcustomclassName('active-link')
    }

    console.log(customclassName)
  }, [])

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
            <ul>
              <li>
                <a className={customclassName} onClick={handleNavigate}>
                  Home
                </a>
              </li>
            </ul>
        </div>
    </nav>
  )
}
