import CartWidget from "./CartWidget"
import "./navbar.scss"

const NavBar = () => {
    return (
    <nav className="navbar">
        <div className='Brand'>
            <h1>Iceman</h1>
        </div>

        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Mi Carrito</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
        <CartWidget />
    </nav>
    )
}
export default NavBar