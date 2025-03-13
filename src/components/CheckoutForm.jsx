import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/db";
import { useNavigate } from "react-router";
import { serverTimestamp } from "firebase/firestore"; // IMPORTAR ESTO
import styles from "../styles/CheckoutForm.module.css";

function CheckoutForm() {
    const navigate = useNavigate();
    const { cart, getTotal, clearCart } = useContext(CartContext); // Agregar clearCart
    const MySwal = withReactContent(Swal);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.nombre.value;
        const email = form.email.value;
        const phone = form.celular.value;

        const order = {
            items: cart,
            user: { fullname: name, email: email, phone: phone },
            time: serverTimestamp(),
            total: getTotal(),
        };

        try {
            const id = await createOrder(order);

            await MySwal.fire({
                title: <p>Gracias por tu compra</p>,
                text: `El ID de tu compra es ${id}`,
                icon: "success",
            });

            clearCart(); // Limpiar el carrito después de la compra
            navigate("/");
        } catch (error) {
            console.error("Error al crear la orden:", error);
            MySwal.fire({
                title: "Error",
                text: "Hubo un problema al procesar la compra",
                icon: "error",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <div>
                <label htmlFor="nombre" className={styles.tamano}>Nombre:</label>
                <input type="text" id="nombre" placeholder="Ingrese su nombre" required className={styles.input} />
            </div>
            <div>
                <label htmlFor="email" className={styles.tamano}>Email:</label>
                <input className={styles.input} type="email" id="email" placeholder="Ingrese su email" required />
            </div>
            <div>
                <label htmlFor="celular" className={styles.tamano}>Celular:</label>
                <input type="text" id="celular" placeholder="Ingrese su teléfono" required className={styles.input}/>
            </div>
            <div>
                <button type="submit">Finalizar compra</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    );
}

export default CheckoutForm;

