import ItemCount from "./ItemCount"

function ItemDetail({ detail }) {
  return (
    <div>
      <p>{detail?.name}</p>
      <img src={detail?.image} alt="" />
      <p>{detail?.description}</p>
      <p>${detail?.price}</p>
      <ItemCount product={detail}/>
    </div>
  )
}

export default ItemDetail
