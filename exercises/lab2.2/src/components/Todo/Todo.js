/* Imports */
import { Component } from "react";
import DeleteButton from "../Buttons/DeleteButton";
import './Todo.css';

/* Todo component */
class Todo extends Component {
    render() {
        const { id, message, isUrgent, onClick } = this.props;
        console.log("isUrgent", isUrgent);
        return (
            <li key={id}>
                {message}
                {isUrgent && <span className="urgent">!</span>}
                <DeleteButton onClick={onClick} />
            </li>
        )
    }
}

export default Todo;
