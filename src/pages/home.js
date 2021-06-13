import React from 'react';
import { Link } from "react-router-dom";
import getCategories from "../adaptors/categories"
import { loadingError } from '../util/util';

  export default  class Home extends React.Component {
    state = { categories: [], isLoading: true, error: null };

  async componentDidMount() {
    try {
      const response = await getCategories();
      this.setState({ categories: response, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  renderHeroes = () => {
    const { categories} = this.state;

    var msg = loadingError(this.state)
    if (msg){return msg}

    return categories.map(category => (
        <div key={category} className="hero-container">
            <Link to={"/c/" + category}>
            <img alt="" src={"https://loremflickr.com/1280/480/" + category} />
            <div className="centered">
                {category}
            </div>
            </Link>
        </div>
        
    ));
  };

    render() {
          return (
            <div id="home-container">
              {this.renderHeroes()} 
            </div>
          )
    }
  }