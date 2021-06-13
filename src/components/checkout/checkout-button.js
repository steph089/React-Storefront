import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";


export default function CheckoutButton() {
    const {state} = useCart()
    return <li key="cart" className={(state.cart.length !== 0 ? 'cart-button': "hide ") + ""} >
        <Link to="/checkout">Checkout </Link>
    </li>
  }

  export {CheckoutButton}