/* Imports */
import './ProductPrice.css';

/* ProductPrice Component */
const ProductPrice = (props) => {
    return (
        <div className="product">
            <img src={`images/${props.img}`} alt={props.imgName} />
            {props.sale ? (<div className="sale">Sale</div>) : ''}
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="price">${props.price}.00</div>
            <button className="btn">Buy now!</button>
        </div>
    );
};

export default ProductPrice;