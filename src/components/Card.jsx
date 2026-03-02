
import './Card.css' 
import Counter from './Counter'

function Card({ title, img, price }) {
    return (
        <li className="card-item">
            <img className="card-img" src={img} alt=""></img>
            <h3 className="card-title">{title}</h3>
            <p className="card-price">Precio: ${price}</p>
            <Counter></Counter>
            <button>Comprar</button>
        </li>
    )
}

export default Card;