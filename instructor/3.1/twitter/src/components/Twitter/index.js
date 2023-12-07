import { Component } from 'react'

import MiniTwitter from '../MiniTwitter'
import ComposeTweet from '../ComposeTweet'

class Twitter extends Component {
	//eslint-disable-next-line
	state = { tweets: [...startingTweets] }

	AddNewTweet = (newTweet) => {
		this.setState({ tweets: [...this.state.tweets, newTweet] })
	}

	reset = (e) => {
		e.preventDefault()
		this.setState({ tweets: [...startingTweets] })
	}

	remove = (id) => {
		const newArray = this.state.tweets.filter((tweet) => tweet.id !== id)
		this.setState({ tweets: newArray })
	}

	removeFirstOrLast = (e, position) => {
		e.preventDefault()
		if (position === 'first') {
			const firstItem = this.state.tweets.shift()
			this.setState({
				tweets: [...this.state.tweets].filter(
					(tweet) => tweet.id !== firstItem.id
				),
			})
		}
		if (position === 'last') {
			const lastItem = this.state.tweets.pop()
			this.setState({
				tweets: [...this.state.tweets].filter(
					(tweet) => tweet.id !== lastItem.id
				),
			})
		}
	}

	render() {
		return (
			<>
				<ComposeTweet
					tweets={this.state.tweets}
					AddNewTweet={this.AddNewTweet}
					reset={this.reset}
					removeFirst={(e) => this.removeFirstOrLast(e, 'first')}
					removeLast={(e) => this.removeFirstOrLast(e, 'last')}
				/>
				{this.state.tweets.map(({ id, username, content }) => {
					return (
						<MiniTwitter
							key={id}
							userName={username}
							message={content}
							remove={() => this.remove(id)}
						/>
					)
				})}
			</>
		)
	}
}

export default Twitter

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
