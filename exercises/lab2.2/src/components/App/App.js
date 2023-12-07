/* Imports */
import { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import './App.css';

/* App component */
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    )
  };
}

export default App;
