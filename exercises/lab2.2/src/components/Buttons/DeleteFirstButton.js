/* Imports */
import { Component } from "react";
import "./Button.css";

class DeleteFirstButton extends Component {
    render() {
        const { onClick } = this.props;
        return(
            <button onClick={onClick}>Delete first item</button>
        )
    }
}

export default DeleteFirstButton;
