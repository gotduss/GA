import { Component } from 'react'

import Twitter from '../Twitter'
class App extends Component {
	render() {
		return <Twitter userName='wendel' message='some message' />
	}
}

export default App

// class TruthOrLie extends Component {
// 	render() {
// 		return (
// 			<>
// 				<h1>Truth or Lie</h1>
// 				<Truthy />
// 			</>
// 		)
// 	}
// }

// class Truthy extends Component {
// 	state = { truth: true }

// 	swap = () => {
// 		this.setState({ truth: !this.state.truth })
// 	}

// 	render() {
// 		if (this.state.truth) {
// 			return (
// 				<>
// 					<button onClick={this.swap}>Swap</button>
// 					<Message message="It's true" />
// 				</>
// 			)
// 		} else {
// 			return (
// 				<>
// 					<button onClick={this.swap}>Swap</button>
// 					<Message message="It's false" />
// 				</>
// 			)
// 		}
// 	}
// }

// class Message extends Component {
// 	render() {
// 		return <p>{this.props.message}</p>
// 	}
// }

// export default TruthOrLie
