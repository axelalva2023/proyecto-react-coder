import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"
import { Link } from "react-router";
import styles from "./styles/NavBar.module.css"

function NavBar() {

    return (
        <header>
            <Link to="/">
                <img src={logo} href="/" alt="logo de venta" />
            </Link>
            <nav>
                <ul>
                    <Link to="category/tablets" className={styles.elementolink}>Tablet</Link>
                    <Link to="category/laptops" className={styles.elementolink}>Notbook</Link>
                    <Link to="category/smartphones" className={styles.elementolink}>Celulares</Link>
                    <Link to="category/mens-watches" className={styles.elementolink}>Reloj</Link>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    )
}

export default NavBar