/* Imports */
import { Component } from "react";
import './TodoAddForm.css';

/* TodoAddForm component */
class TodoAddForm extends Component {
    render() {
        const { onClick, onChange, onCheckboxChange, listItemVal, isChecked } = this.props;
        return(
            <form className="todo-add-form">
                <input type="text" value={listItemVal} onChange={onChange} placeholder="Enter list item..." />
                <button onClick={onClick}>Submit</button>
                <label htmlFor="urgent">
                    <input type="checkbox" id="urgent" onChange={onCheckboxChange} checked={isChecked} />
                    urgent
                </label>
            </form>
        )
    }
}

export default TodoAddForm;
