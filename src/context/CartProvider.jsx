import { CartContext } from "./CartContext"
import { useState } from "react"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Verifica si el producto ya está en el carrito
            const existingProduct = prevCart.find(item => item.product.id === product.product.id);
    
            if (existingProduct) {
                // Si el producto ya existe, actualiza la cantidad
                return prevCart.map(item =>
                    item.product.id === product.product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                // Si no existe, agrégalo al carrito
                return [...prevCart, product];
            }
        });
    };
    

    const getQuantity = () => {
        const quantities = cart.map(product => product.quantity)
        const result = quantities.reduce((acc, current) => acc + current, 0)
        return result

    }
    const getTotal = () => {
        const prices = cart.map(product => product.price * product.quantity)
        const result = prices.reduce((acc, current) => acc + current, 0)
        return result

    }
    const clearCart = () => {
        setCart([]); // Vacía el carrito
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(prod => prod.product.id !== id));
    };
    


    return (
        <CartContext.Provider value={{ cart, addToCart, getQuantity, getTotal, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

