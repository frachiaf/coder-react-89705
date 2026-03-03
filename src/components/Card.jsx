
import './Card.css' 
import Counter from './Counter'

function Card({ title, image, price }) {
    return (
        <li className="card-item">
            <img className="card-img" src={image} alt=""></img>
            <h3 className="card-title">{title}</h3>
            <p className="card-price">Precio: ${price}</p>
            <Counter></Counter>
            <button>Comprar</button>
        </li>
    )
}

export default Card;