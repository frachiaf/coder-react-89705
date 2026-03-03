
import Card from './Card'
import products from '../data/products.js'
import getProducts from '../data/promise.js'

function ItemListContainer({title}) {
    // Todavia necesita mostrar los datos de la promise
    getProducts().then(
        (response) => {
            alert("Recibimos los datos")
            console.log("Datos recibidos: " + response)
        }
    ).catch( (error) => alert(error) )
    return (
        <section>
            <h2>{title}</h2>
            <ul className="card-container">
                {
                    products.map( (prod) => <Card 
                        key={prod.id}
                        image={prod.image}
                        title={prod.title}
                        price={prod.price}/>
                    )
                }
            </ul>
        </section>
    )
}

export default ItemListContainer