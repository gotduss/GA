import { Component } from 'react'
import './index.css'

class MiniTwitter extends Component {
	render() {
		const { userName, message } = this.props
		return (
			<div className='Tweet'>
				<strong>{userName}</strong>
				<p>{message}</p>
			</div>
		)
	}
}

export default MiniTwitter
