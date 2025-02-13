import styles from "./styles/Item.module.css"
import { Link } from "react-router";

function Item({ producto }) {
  return (
    <div className={styles.tarjeta}>
      <img src={producto.thumbnail} alt="" className={styles.imagentarjeta} />
      <p>{producto.title}</p>
      <p>{producto.category}</p>
      <p>${producto.price}</p>
      <p className={styles.parrafotarjeta}>stock: {producto.stock}</p>
      <Link to={`/item/${producto.id}`}>
        <a href="" className={styles.boton}>Ver mas</a>
      </Link>
    </div>
  )
}

export default Item
