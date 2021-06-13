import { useCart } from "../../contexts/cart-context";
import CartCard from "./cart-card"


function CartButton() {
    const {dispatch} = useCart()
    return <li key="cart" class="cart-button ">
        <button onClick={() => dispatch({type: 'toggle'})}>Cart </button>
    </li>
  }

 export default function CartDisplay() {
    const {state} = useCart()

    return <div className={(state.visible ? 'hide': "") + " cart-content row"}>
        {state.cart.map((product) => (<div class="col-2">
             <CartCard product={product} cart={true} />
             </div>
        ))}  
    </div>
  }
  export {CartButton, CartDisplay}