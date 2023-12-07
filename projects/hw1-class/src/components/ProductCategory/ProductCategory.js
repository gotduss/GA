/* Imports */
import { Component } from "react";
import './ProductCategory.css';

/* ProductFilter component */
class ProductCategory extends Component {
    render() {
        return (
            <button className={`filter-category${this.props.isSelected ? ' active' : ''}`} onClick={this.props.onClick}>{this.props.category}</button>
        )
    }
}

export default ProductCategory;
