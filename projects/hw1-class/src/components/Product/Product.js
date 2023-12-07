/* Imports */
import { Component } from "react";
import './Product.css';

/* Product component */
class Product extends Component {
    render() {
        const { id, name, category, description, price } = this.props;
        const productImg = this.props.name.split(' ').join('-').toLowerCase();

        return (
            <div key={id} className="product-item">
                <div className="img">
                    <img src={`images/${productImg}.jpg`} />
                    <div className="category">{category}</div>
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="cart-info">
                        <div className="price">
                            <span className="regular">${price}</span>
                        </div>
                        <button type="button" className="btn">Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
