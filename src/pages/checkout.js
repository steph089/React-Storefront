import { React} from 'react';
import { useCart } from '../contexts/cart-context';
import CartCard from "../components/cart/cart-card"
import { Link } from 'react-router-dom';



export default function Checkout() {
    const {state} = useCart()

    let total;
    if(state.cart.length !== 0){
        total = state.cart.reduce((s, product) =>
            s + (product.price * product.count), 0
        ); 
    }

     return <div class="detail-wrapper row">
         <div id="payment" class="col-8">
         <div class="container">
            <form>
                <div class="row">
                <div class="col-5">
                    <h3>Billing Address</h3>
                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                    <label for="email"><i class="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com"/>
                    <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                    <label for="city"><i class="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="New York"/>

                    <div class="row">
                        <div class="col-5">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" placeholder="NY"/>
                        </div>
                        <div class="col-1"/>
                        <div class="col-5">
                            <label for="zip">Zip</label>
                            <input type="text" id="zip" name="zip" placeholder="10001"/>
                        </div>
                    </div>
                </div>
                    <div class="col-1"/>
                    <div class="col-5">
                    <h3>Payment</h3>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                    <div class="row">
                    <div class="col-5">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                    </div>
                    <div class="col-1"/>
                        <div class="col-5">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352"/>
                    </div>
                    </div>
                </div>
                
                </div>
                <label>
                <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                </label>
                <Link to="/confirmed"><input type="submit" value="Submit" class="btn"/></Link>
            </form>
        </div>
        </div>
        <div id="cart" class="col-4">
            {state.cart.map((product) =>  
            (   
                <div class="row checkout-list">
                    <div class="col-4">
                        <img class="img" src={product.image} alt="" />
                     </div>
                     <div class="col-8">
                        <h3>{product.title}</h3>
                         <h2>${product.price} x {product.count}</h2>
                     </div>
                </div>
            ))}
            <h1> Total: ${state.cart.length !== 0 ? total.toFixed(2) : 0}</h1>   
        </div>
     </div>
}