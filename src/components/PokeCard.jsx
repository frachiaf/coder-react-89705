
import './Card.css' 

function PokeCard({ name }) {
    return (
        <li className="card-item">
            <h3 className="card-title">{name}</h3>
        </li>
    )
}

export default PokeCard;