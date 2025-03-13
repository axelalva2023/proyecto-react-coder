//Controlar el ciclo de vida del counter uso useEffect
import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"

function ItemCount(product) {
    const [count, setCount] = useState(0)
    const {addToCart} = useContext(CartContext)

   

    //[] se va a ejecutar 1 vez en el montaje
    //[count] se va a ejecutar 1 vez y cada vez que se actualize count la variable de estado

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        if (count > 0) { // Solo permite agregar si count es mayor a 0
            addToCart({ ...product, quantity: count });
        } else {
            alert("Debes agregar al menos un producto.");
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount