// * Generar una promesa que retorna los productos en 1 segundo
// * Esto simula la conexion de datos a API/Database/Service
import products from './products.js'

function getProducts(){
    const miPromesa = new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        }
    )
    return miPromesa;
}

export default getProducts;
