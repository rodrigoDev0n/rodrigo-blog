import { footer } from "../styles/footer"
import github from '../icons/github.png'

export const Footer = ({position}) => {
  return (
    <footer style={
        {
            ...footer.footer_container,
            position: position ? 'absolute' : '',
            bottom: '0px'
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
