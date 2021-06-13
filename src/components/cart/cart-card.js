import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../contexts/cart-context";



export default function ProductCard(props) {
  const {dispatch} = useCart()

return (
        <div class="cart-card-container">
            <img class="img" src={props.product.image} alt="" />
            <div class="centered">{props.product.title}</div>   
            <div class="count">{props.product.count}</div>  
            <button class="remove" onClick={() => dispatch({type: 'remove', item: props.product})}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
)}