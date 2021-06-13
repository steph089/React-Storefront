import { Link} from "react-router-dom";
import { useCart } from "../../contexts/cart-context";



export default function ProductCard(props) {
  const {dispatch} = useCart()

return (
        <div class="el-wrapper">
          <div class="box-up">
            <Link to={"/p/" + props.product.id}>
            <img class="img" src={props.product.image} alt="" />
            <div class="img-info">
              <div class="info-inner">
                <span class="p-name">{props.product.title}</span>
              </div>
            </div>
            </Link>
          </div>        
          <div class="box-down">
            <div class="h-bg">
              <div class="h-bg-inner"></div>
            </div>
            <a class="cart" onClick={() => dispatch({type: 'add', item: props.product})} >
              <span class="price">${props.product.price}</span>
              <span class="add-to-cart">
                <span class="txt">Add to cart</span>
              </span>
            </a>
          </div>
        </div>
)}