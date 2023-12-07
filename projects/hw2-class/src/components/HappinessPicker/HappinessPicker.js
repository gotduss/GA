/* Imports */
import { Component } from "react";
import "./HappinessPicker.css";

/* HappinessPicker component */
class HappinessPicker extends Component {
    render() {
        const { emoji, onClick, value, isSelected } = this.props;
        return(
            <button className={`emoji${isSelected ? ' active' : ''}`} onClick={onClick} value={value}>{emoji}</button>
        )
    }
}

export default HappinessPicker;
