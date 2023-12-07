/* Imports */
import { Component } from "react";
import './ProductSearch.css';

/* ProductSearch component */
class ProductSearch extends Component {
    render() {
        return(
            <input type="text" value={this.props.value} onChange={this.props.onChange} placeholder="Search products..." />
        )
    }
}

export default ProductSearch;
