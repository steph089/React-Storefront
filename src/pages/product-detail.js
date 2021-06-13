import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { React, useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { getProductInfo} from "../adaptors/products"
import { useCart } from '../contexts/cart-context';

export default function ProductDetail() {
    const[isLoading, setIsLoading ] = useState(true)
    var [productInfo, setproductInfo] = useState([])
    let { productId } = useParams();
    const {dispatch} = useCart()

    useEffect(() => {
        setIsLoading(true)
        try {
            //could probably simplify or move into a util function
            setIsLoading(false)
            getProductInfo(productId).then((productInfo) => {
                setproductInfo(productInfo)
                setIsLoading(false)   
            })
        } catch (error) {
           console.log(error)
        }
        return () => {}
    },[productId, dispatch]);

    

     return <div class="background-container detail-wrapper">
        <div class="card">
            <nav>
             <Link to={"/c/" + productInfo.category}>
                <FontAwesomeIcon icon={faArrowLeft} />
                 <div class="text">Back to {productInfo.category}</div>
             </Link>
            </nav>
                <div class="photo">
                <img src={productInfo.image}/>
                </div>
        <div class="description">
            <h2>{productInfo.title}</h2>
            <h4>{productInfo.category}</h4>
            <h1>${productInfo.price}</h1>
            <p>{productInfo.description}</p>
            <button onClick={() => dispatch({type: 'add', item: productInfo})}>Add to Cart</button>
        </div>
    </div>
   </div>
}