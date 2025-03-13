import Item from "./Item"
import styles from "../styles/Item.module.css"


function ItemList({ items }) {
  return (
    <div className={styles.tarjetacontenedor}>
      {items.map(producto => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  )
}

export default ItemList
