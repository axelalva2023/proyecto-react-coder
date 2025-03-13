import carrito from "../img/carrito.png"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router"

function CartWidget() {
    const {getQuantity} = useCart()
    const total = getQuantity()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/cart")
    }

    return (
        <div className="carrito">
            <img src={carrito} alt="carrito de compra" onClick={handleClick}/>
            <p>{total}</p>
        </div>
    )
}

export default CartWidget