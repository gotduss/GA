/* Imports */
import { Component } from "react";
import './ProductFilterPrice.css';

/* ProductFilterPrice component */
class ProductFilterPrice extends Component {
    render() {
        const { onChange, selectedValue, onReset } = this.props;
        return(
            <div className="products-price-sort">
                <label>Sort: </label>
                <select onChange={onChange} defaultValue={selectedValue}>
                    <option value="default">Default</option>
                    <option value="lowToHigh">Price: low to high</option>
                    <option value="highToLow">Price: high to low</option>
                </select>
            </div>
        )
    }
}

export default ProductFilterPrice;
