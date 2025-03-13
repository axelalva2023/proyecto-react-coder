import styles from "../styles/CartContainer.module.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router";
function CartContainer() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext)
  console.log(cart)
  

  return (
    <div>
      {cart.map(prod => 
      <p key={prod.id} className={styles.parrafocentrado}>
        {prod.product.name} x {prod.quantity}<hr/><button onClick={() => removeFromCart(prod.product.id)}>eliminar</button> <Link to="/checkout"><button>ir al checkout</button></Link><button onClick={clearCart}>Vaciar carrito</button></p>)}

    </div>
  )
}



export default CartContainer
