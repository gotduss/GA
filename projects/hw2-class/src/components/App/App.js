/* Imports */
import { Component } from "react";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import "./App.css";

/* App component */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Let us know how we did!</h1>
        </header>
        <main>
          <FeedbackForm />
        </main>
      </div>
      );
  }
}

export default App;
