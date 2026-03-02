
import './NavBar.css' 
import Logo from './Logo'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header className="header">
            <a href='#' className="card-img">Shop</a>
            <Logo></Logo>
            <CartWidget></CartWidget>
        </header>
    )
}

export default NavBar;