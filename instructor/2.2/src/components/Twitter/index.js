import { Component } from 'react'

import MiniTwitter from '../MiniTwitter'

const startingTweets = [
	{
		// included id to reference uniquely that element
		id: 1,
		username: 'Wendel',
		content: "What's everyone doing on the long weekend?",
	},
	{
		id: 2,
		username: 'Sally',
		content: "I am so done with today, I can't even.",
	},
	{ id: 3, username: 'Fred', content: 'Cute pupper!!! Hi fren!' },
]

class Twitter extends Component {
	state = { tweets: startingTweets, userName: '', message: '' }

	handleInputChange = (e, stateToUpdate) => {
		if (stateToUpdate === 'userName')
			this.setState({ userName: e.target.value })
		if (stateToUpdate === 'message') {
			this.setState({ message: e.target.value })
		}
	}

	submit = () => {
		const newTweet = {
			id: 4,
			username: this.state.userName,
			content: this.state.message,
		}

		this.setState({
			tweets: [...this.state.tweets, newTweet],
			userName: '',
			message: '',
		})
	}

	render() {
		// console.log('userName', this.state.userName)
		// console.log('message', this.state.message)
		return (
			<>
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
				{this.state.tweets.map(({ id, username, content }) => {
					return <MiniTwitter key={id} userName={username} message={content} />
				})}
			</>
		)
	}
}

export default Twitter
