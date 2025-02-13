import ItemCount from "./ItemCount"

function ItemDetail({ detail }) {
  return (
    <div>
      <p>{detail?.title}</p>
      <img src={detail?.thumbnail} alt="" />
      <p>{detail?.description}</p>
      <p>${detail?.price}</p>
      <ItemCount />
    </div>
  )
}

export default ItemDetail
