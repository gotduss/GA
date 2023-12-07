// import { Component } from 'react'
import './index.css'

// class MotivationalPost extends Component {
// 	render() {
// 		const { imageURL, title, message } = this.props
// 		return (
// 			<div>
// 				<img src={imageURL} alt='' />
// 				<h1>{title}</h1>
// 				<p>{message}</p>
// 			</div>
// 		)
// 	}
// }

// function MotivationalPost({ imageURL, title, message }) {
// 	return (
// 		<div>
// 			<img src={imageURL} alt='' />
// 			<h1>{title}</h1>
// 			<p>{message}</p>
// 		</div>
// 	)
// }

const MotivationalPost = ({ imageURL, title, message }) => {
	return (
		<div className='MotivationalPoster'>
			<img src={imageURL} alt='' />
			<h1>{title}</h1>
			<p>{message}</p>
		</div>
	)
}

export default MotivationalPost
