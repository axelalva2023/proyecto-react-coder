import { useState, useEffect } from "react"
import { useParams } from "react-router";
import ItemList from "./ItemList"
import { getProducts, getProductsByCategory } from "../firebase/db";

function ItemListContainer() {

    const [items, setItems] = useState([])
    const { id } = useParams()


    useEffect(() => {
        //const allProducts = 'https://dummyjson.com/products'
        //const byCategory = `https://dummyjson.com/products/category/${id}`
        //fetch(id ? byCategory : allProducts)
        //.then(res => res.json())
        //.then(res => setItems(res.products));
        if (id) {
            getProductsByCategory(id).then(res => setItems(res))

        } else {
            getProducts().then(res => setItems(res))

        }

    }, [id])


    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer