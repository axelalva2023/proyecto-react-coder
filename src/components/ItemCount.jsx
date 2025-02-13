//Controlar el ciclo de vida del counter uso useEffect
import { useState, useEffect } from "react"

function ItemCount() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("El componente se monto")
    }, [count])

    //[] se va a ejecutar 1 vez en el montaje
    //[count] se va a ejecutar 1 vez y cada vez que se actualize count la variable de estado

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleRestar = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRestar}>-</button>
        </div>
    )

}

export default ItemCount