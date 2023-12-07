import { Component } from 'react'

class ComposeTweet extends Component {
	state = { userName: '', message: '' }
	handleInputChange = (e, stateToUpdate) => {
		if (stateToUpdate === 'userName')
			this.setState({ userName: e.target.value })
		if (stateToUpdate === 'message') {
			this.setState({ message: e.target.value })
		}
	}
	submit = (e) => {
		e.preventDefault()
		const tweets = this.props.tweets
		const lastTweet = tweets[tweets.length - 1]
		const newTweet = {
			id: lastTweet ? lastTweet.id + 1 : 1,
			username: this.state.userName,
			content: this.state.message,
		}
		this.props.AddNewTweet(newTweet)
		this.setState({
			userName: '',
			message: '',
		})
	}

	render() {
		return (
			<form>
				<input
					onChange={(e) => this.handleInputChange(e, 'userName')}
					style={{ marginRight: 20 }}
					type='text'
					value={this.state.userName}
				/>
				<input
					onChange={(e) => this.handleInputChange(e, 'message')}
					style={{ marginRight: 20 }}
					type='text'
					value={this.state.message}
				/>
				<button onClick={this.submit}>Submit</button>
				<button onClick={this.props.reset}>Reset</button>
				<button onClick={this.props.removeFirst}>Remove First</button>
				<button onClick={this.props.removeLast}>Remove Last</button>
			</form>
		)
	}
}

export default ComposeTweet
