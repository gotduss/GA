// import React, { Component } from 'react'
import { useEffect } from 'react'

// class Slide extends Component {
// 	componentDidMount() {
// 		console.log('mounted')
// 		this.initialTitle = document.title
// 		document.title = this.props.title
// 	}

// 	componentDidUpdate() {
// 		console.log('updated')
// 		document.title = this.props.title
// 	}

// 	componentWillUnmount() {
// 		console.log('unmount')
// 		document.title = this.initialTitle
// 	}

// 	render() {
// 		console.log('rendered')
// 		return (
// 			<>
// 				<h1>{this.props.title}</h1>
// 				<p>{this.props.content}</p>
// 			</>
// 		)
// 	}
// }

const Slide = ({ title, content }) => {
	// useEffect receives two parameters, the first one is a callback function (required) and the second one is a dependency array (optional)

	//this will represent componentDidMount
	// useEffect(() => {

	// }, [])

	// this will represent componentDidMount at first and componentDidUpdate when that dependency value changes
	// useEffect(() => {

	// }, [somedependency])

	//this will represent componentDidMount and componentDidUpdate
	// useEffect(() => {

	// })

	// useEffect(() => {
	// 	console.log('mounted')
	// 	const initialTitle = document.title
	// 	document.title = title
	// }, [])

	useEffect(() => {
		const initialTitle = document.title
		document.title = title
		console.log('mounted and updated')

		const willUnMount = () => {
			console.log('unmount')
			document.title = initialTitle
		}
		return willUnMount
	}, [title])

	// useEffect(() => {
	// 	console.log('mount')
	// 	const willUnMount = () => {
	// 		console.log('unmount')
	// 	}
	// 	return willUnMount
	// }, [])

	return (
		<>
			<h1>{title}</h1>
			<p>{content}</p>
		</>
	)
}

export default Slide
