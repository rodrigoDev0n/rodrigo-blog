import { card } from "../styles/card"
import article from '../icons/article.png'
import { useNavigate } from "react-router-dom"

export const ArticlesCard = ({title='Bienvenida al blog 👋', date='27 de Mayo 2023', route= '/post'}) => {

    const navigate = useNavigate()

    const handleToWelcome = () => {
        navigate(route)
    }

    return (
        <div
            onClick={() => handleToWelcome()}
            className="custom-container"
            style={card.card_container}
        >
            <div 
                style={card.card_article_container}
            >
            </div>
            <div style={card.card_article_data_container}>
                <h2 style={card.card_title}>
                    {title}
                </h2>
                <p style={card.card_date}>
                    {date}
                </p>
            </div>
        </div>
    )
}
