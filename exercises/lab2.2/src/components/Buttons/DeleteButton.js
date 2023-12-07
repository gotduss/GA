/* Imports */
import { Component } from "react";
import "./Button.css";

class DeleteButton extends Component {
    render() {
        const { onClick } = this.props;
        return(
            <button onClick={onClick}>X</button>
        )
    }
}

export default DeleteButton;
