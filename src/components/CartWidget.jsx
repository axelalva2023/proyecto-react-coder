import carrito from "../img/carrito.png"

function CartWidget() {

    return (
        <div className="carrito">
        <img src={carrito} alt="carrito de compra"/>
        <p>10</p>
        </div>
    )
}

export default CartWidget