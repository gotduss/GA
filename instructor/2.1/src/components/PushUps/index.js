import { Component } from 'react'

class PushUps extends Component {
	// old and very old way of doing it
	// constructor(props) {
	// 	super(props)
	// 	this.state = { count: 0 }
	// }

	// new away to define state on class components
	state = { count: 0, message: '' }

	increase = () => {
		this.setState({ count: this.state.count + 1 })
		if (this.state.count < 5) {
			this.setState({ message: 'Keep going!' })
		} else if (this.state.count < 8) {
			this.setState({ message: 'You are doing well!' })
		} else if (this.state.count < 10) {
			this.setState({ message: 'Almost there!' })
		} else {
			this.setState({ message: 'You are awesome!' })
		}
	}
	render() {
		console.log('render')
		// let message = ''
		// if (this.state.count < 5) {
		// 	message = 'Keep going!'
		// } else if (this.state.count < 8) {
		// 	message = 'You are doing well!'
		// } else if (this.state.count < 10) {
		// 	message = 'Almost there!'
		// } else {
		// 	message = 'You are awesome!'
		// }
		return (
			<>
				{/* <p>{this.props.count} pushups!</p> */}
				<p>{this.state.count} pushups!</p>
				<p>{this.state.message}</p>
				<button onClick={this.increase}>Add</button>
			</>
		)
	}
}

export default PushUps
