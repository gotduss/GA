import React, { Component } from 'react'

// Movie component using arrow function

// const Movie = (props) => {
//   return <h2>{props.title}</h2>
// }

// Movie component using class component style and a if statement for conditional

// class Movie extends Component {
//   render() {
//     if (this.props.title === 'Iron Man') {
//       return (
//         <h2>
//           {this.props.title} <em> - In Cinemas Now!</em>
//         </h2>
//       )
//     }

//     return <h2>{this.props.title}</h2>
//   }
// }

// Movie component using class component style and a ternary statement for conditional. Rememeber that we prefer to user ternary specially if the condition should return a thruthy value or a falsy value

// class Movie extends Component {
//   render() {
//     return (
//       <h2>
//         {this.props.title}
//         {this.props.title === 'Iron Man' ? <em> - In Cinemas Now!</em> : null}
//       </h2>
//     )
//   }
// }

// Movie component using class component style and a logical && (and)operator for conditional. Remember that this operator only returns a single value depending on the condition. An easy way to remember is reading like this: if this.props.title is equal to Iron Man the render...

// Note that I'm using Tailwind here for quick styling as well. Check docs here: https://tailwindcss.com/docs/installation/using-postcss

// I will touch base on different ways to style a component on our next class.

class Movie extends Component {
	render() {
		return (
			<div className='text-center mb-8 p-4 border-2 rounded-md shadow-lg'>
				<h2 className='font-extrabold mb-2'>
					{this.props.title}
					{this.props.title === 'Iron Man' && (
						<em style={{ color: 'red' }}> - In Cinemas Now!</em>
					)}
				</h2>
				<img
					width={460}
					height={460}
					src={this.props.img}
					alt={this.props.title}
				/>
			</div>
		)
	}
}

export default Movie
