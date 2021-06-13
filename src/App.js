import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./components/navigation"
import Home from "./pages/home"
import Gridwall from "./pages/gridwall"
import ProductDetail from "./pages/product-detail"
import Checkout from "./pages/checkout"
import { CartProvider } from "./contexts/cart-context";
import OrderConfirmed from "./pages/order-confirmed";

export default function App() {
  
  // hey, future me, the default route has to be on the bottom..
  return (
    <Router>
      <div class="wrapper">
        <CartProvider>
        <Navigation />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/confirmed">
              <OrderConfirmed />
            </Route>
            <Route path="/c/:categoryId">
              <Gridwall />
            </Route>
            <Route path="/p/:productId">
              <ProductDetail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </CartProvider>
      </div>
    </Router>
  );
}