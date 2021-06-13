import React from 'react';
import {  Link
  } from "react-router-dom";
import getCategories from "../adaptors/categories"
import { loadingError } from '../util/util';
import {CartDisplay,CartButton} from './cart/cart';
import CheckoutButton from './checkout/checkout-button'


export default  class Navigation extends React.Component {
  state = { categories: [], isLoading: true, error: null };
   
  async componentDidMount() {
    try {
      const response = await getCategories();
      this.setState({ categories: response, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  renderNavigation = () => {
    const { categories} = this.state;

    var msg = loadingError(this.state)
    if (msg){return msg}

    return categories.map(category => (
          <li key={category}>
            <Link to={"/c/" + category}>{category}</Link>
          </li>
    ));
  };

    render() {
      
          return (
            <div class="navigation">
            <ul>
             <li key="home" class="nav-home">
                <Link to="/">Home</Link>
             </li>
              {this.renderNavigation()} 
              <li key="browse" class="nav-browse">
                <Link to="/c/all">Browse </Link>
             </li>
             <CheckoutButton />
             <CartButton />
            </ul>
            <CartDisplay />
        </div>
          )
    }
  }