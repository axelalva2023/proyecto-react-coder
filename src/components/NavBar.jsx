import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"
import { Link } from "react-router";
import styles from "../styles/NavBar.module.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar() {
    const value = useContext(CartContext)
    console.log(value)

    return (
        <header>
            <Link to="/">
                <img src={logo} href="/" alt="logo de venta" />
            </Link>
            <nav>
                <ul>
                    <Link to="category/tablets" className={styles.elementolink}>Tablet</Link>
                    <Link to="category/notebooks" className={styles.elementolink}>Notbook</Link>
                    <Link to="category/cellphones" className={styles.elementolink}>Celulares</Link>
                    <Link to="category/reloj" className={styles.elementolink}>Reloj</Link>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}

export default NavBar