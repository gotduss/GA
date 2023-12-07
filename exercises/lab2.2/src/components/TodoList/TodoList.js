/* Imports */
import { Component } from "react";
import list from "../TodoListData";
import Todo from "../Todo/Todo";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import DeleteAllButton from "../Buttons/DeleteAllButton";
import DeleteFirstButton from "../Buttons/DeleteFirstButton";
import './TodoList.css';

/* TodoList component */
class TodoList extends Component {
    state = {
        todoList: list,
        listItem: '',
        checked: false,
    };

    handleInputChange = (e) => {
        this.setState({
            listItem: e.target.value,
        });
    }

    handleCheckboxChange = (e) => {
        this.setState({
            checked: e.target.checked,
        });
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        const newMessage = {
			id: this.state.todoList.length + 1,
			message: this.state.listItem,
            isUrgent: this.state.checked,
		}
        this.setState({
            todoList: [newMessage, ...this.state.todoList],
            listItem: '',
            checked: !this.state.checked,
        })
    }

    handleDeleteAllClick = () => {
        const { todoList } = this.state;
        let deleteAll = [...todoList];
        deleteAll = [];
        this.setState({
            todoList: deleteAll,
        })
    }

    handleDeleteFirstClick = () => {
        const { todoList } = this.state;
        let currentTodoList = [...todoList];
        currentTodoList.shift();
        this.setState({
            todoList: currentTodoList,
        });
    }

    handleDeleteClick = (id) => {
        const { todoList } = this.state;
        let currentTodoList = [...todoList];
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        this.setState({
            todoList: currentTodoList,
        });
    }

    render() {
        return (
            <>
                <TodoAddForm onClick={this.handleSubmitClick} onChange={this.handleInputChange} onCheckboxChange={this.handleCheckboxChange} listItemVal={this.state.listItem} isChecked={this.state.checked} />
                <ul className="list">
                    {this.state.todoList.map(({id, message, isUrgent}) => <Todo key={id} message={message} onClick={() => this.handleDeleteClick(id)} isUrgent={isUrgent} isChecked={this.state.checked} />)}
                </ul>
                <div className="actions">
                    <DeleteAllButton onClick={this.handleDeleteAllClick} />
                    <DeleteFirstButton onClick={this.handleDeleteFirstClick} />
                </div>
            </>
        )
    }
}

export default TodoList;