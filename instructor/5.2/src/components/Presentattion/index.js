import React, { Component } from 'react'

import Slide from '../Slide'

const slides = [
	{ id: 1, title: 'First slide!', content: 'Welcome to my presentation' },
	{
		id: 2,
		title: 'Agenda',
		content: "I'm going to talk about some stuff.",
	},
	{
		id: 3,
		title: 'Content',
		content: 'blah blah blah',
	},
	{
		id: 4,
		title: 'Content 2',
		content: 'blah blah blah blah blah blah blah blah blah',
	},
	{
		id: 5,
		title: 'Conclusion',
		content: 'Thanks for watching my TED talk',
	},
]

class Presentation extends Component {
	state = { currentSlide: 0, showSlides: false }

	nextSlide = () => {
		const nextSlide = this.state.currentSlide + 1
		if (nextSlide >= slides.length) {
			this.setState({ currentSlide: 0, showSlides: false })
		} else {
			this.setState({ currentSlide: nextSlide })
		}
	}

	startPresentation = () => {
		this.setState({ showSlides: true })
	}

	render() {
		const slide = slides[this.state.currentSlide]
		return this.state.showSlides ? (
			<div>
				<Slide title={slide.title} content={slide.content} />
				<button onClick={this.nextSlide}>Next</button>
			</div>
		) : (
			<button onClick={this.startPresentation}>Start Presentation</button>
		)
	}
}

export default Presentation
