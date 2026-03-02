
import './NavBar.css' 
import Logo from './Logo'
import Cart from './Cart'

function NavBar() {
    return (
        <header className="header">
            <a href='#' className="card-img">Shop</a>
            <Logo></Logo>
            <Cart></Cart>
        </header>
    )
}

export default NavBar;