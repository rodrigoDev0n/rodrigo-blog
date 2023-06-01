import { footer } from "../styles/footer"
import github from '../icons/github.png'

export const Footer = () => {
  return (
    <footer style={
        {
        ...footer.footer_container
        }
    }>
        <div style={footer.footer_info_container}>
            <p>
                Rodrigo Daniel Poblete Paredes
            </p>
            <img style={footer.footer_img} src={github} alt="github" />
        </div>
    </footer>
  )
}
