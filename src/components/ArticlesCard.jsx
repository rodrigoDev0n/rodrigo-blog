import { card } from "../styles/card"
import article from '../icons/article.png'
import { useNavigate } from "react-router-dom"

export const ArticlesCard = () => {

    const navigate = useNavigate()

    const handleToWelcome = () => {
        navigate('/post')
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
                <img className="custom-icon-animation" src={article} alt="article" />
            </div>
            <div style={card.card_article_data_container}>
                <h2 style={card.card_title}>
                    Bienvenida al blog 👋
                </h2>
                <p style={card.card_date}>
                    27 Mayo 2023
                </p>
            </div>
        </div>
    )
}
