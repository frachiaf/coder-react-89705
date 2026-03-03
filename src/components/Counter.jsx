import { useState, useEffect } from "react"

function Counter() {
    const [cantidad, setCantidad] = useState(1)
    // ? 1. Guardar cantidad inicial
    // ? 2. Actualizar cantidad

    useEffect( () => {
        // * Controlar CUANDO se ejectura este efecto/tarea
        // Se ejecuta solo en el montaje esto
        console.log("Ej: Filtro de productos - montaje")
    }, [] )

    console.log("Render del componente")

    function restar(){
        // TODO: Validar nums negativos
        setCantidad(cantidad-1)
    }
    function sumar(){
        // TODO: validar num max
        setCantidad(cantidad+1)
    }
    return (
        <div className="cantidad-container">
            <button data-restar onClick={restar}>-</button>
            <span>{ cantidad }</span>
            <button data-sumar onClick={sumar}>+</button>
        </div>
    )
}

export default Counter