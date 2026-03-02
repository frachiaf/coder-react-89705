
import Card from './Card'
import bolsoVerdeImg from '../assets/productos/bolso_verde.webp'
import bolsoCueroImg from '../assets/productos/bolso_cuero.webp'
import corbataImg from '../assets/productos/corbata.webp'
import llaveroImg from '../assets/productos/llavero.webp'

function ItemListContainer({title}) {
    return (
        <section>
            <h2>{title}</h2>
            <ul className="card-container">
                <Card title="Bolso Cuero" price={99+10} img={bolsoCueroImg}></Card>
                <Card title="Corbata" price={79/2} img={corbataImg}></Card>
                <Card title="Bolso Verde" price={29/2} img={bolsoVerdeImg}></Card>
                <Card title="Llavero" price={15} img={llaveroImg}></Card>
            </ul>
        </section>
    )
}

export default ItemListContainer