import logo from "../img/logo.jpg"
import CartWidget from "./CartWidget"

function NavBar(){

    return (
        <header>
            <img src={logo} alt="logo de venta" />
        <nav>
            <ul>
            <li><a href="">Tablet</a></li>
            <li><a href="">Notbook</a></li>
            <li><a href="">Celulares</a></li>
            <li><a href="">Set up</a></li>
            <CartWidget/>
            </ul>
        </nav>
        </header>
    )
}

export default NavBar