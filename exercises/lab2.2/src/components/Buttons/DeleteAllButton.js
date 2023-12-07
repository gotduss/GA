/* Imports */
import { Component } from "react";
import "./Button.css";

class DeleteAllButton extends Component {
    render() {
        const { onClick } = this.props;
        return(
            <button onClick={onClick}>Delete all</button>
        )
    }
}

export default DeleteAllButton;
