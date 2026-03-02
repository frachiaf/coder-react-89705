
import './Cart.css';

function Cart () {
    // placeholder state for item count, to be updated later
    // const [count, setCount] = useState(0);

    return (
        <button className="cart-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
            >
                <path d="M7 4h-2l-1 2h-3v2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.11.89 2 2 2h12v-2h-12l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.3.12-.46 0-.55-.45-1-1-1h-14v-2zm0 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
        </button>
    )
}


export default Cart;