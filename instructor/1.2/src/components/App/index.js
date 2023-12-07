import React, { Component } from 'react'
import Movie from '../Movies'

// const movies = [
//   'Black Widow',
//   'Iron Man',
//   'Spider-Man: Into the Spider-Verse',
//   'Captain America',
//   'The Avengers',
// ]

// enhancing the data model to be an array of objects so we can have more information/data comimg through. I've added id for easy and unique identification and image for display

const movies = [
	{
		id: 1,
		title: 'Black Widow',
		img: 'https://m.media-amazon.com/images/I/51cxez7hSiL._SL500_.jpg',
	},
	{
		id: 2,
		title: 'Iron Man',
		img: 'https://m.media-amazon.com/images/I/51LyXABhThS._SL500_.jpg',
	},
	{
		id: 3,
		title: 'Spider-Man: Into the Spider-Verse',
		img: 'https://m.media-amazon.com/images/I/51ppST9T9WL._SL500_.jpg',
	},
	{
		id: 4,
		title: 'Captain America',
		img: 'https://d24rugpqfx7kpb.cloudfront.net/STBCO/17817D09A16FD8746A4383CF8321CF11/EVANSCHRIS-8X10-GA3.jpg/1975af68dd819b117dea776be8dad5e7.webp',
	},
	{
		id: 5,
		title: 'The Avengers: ENDGAME',
		img: 'https://m.media-amazon.com/images/I/61aveIc0teL._SL500_.jpg',
	},
]

// function App() {
//   return (
//     <div className="container mx-auto mt-10">
//       <div className="grid grid-cols-3 gap-6">
//         {movies.map((movie) => (
//           <Movie key={movie.id} title={movie.title} img={movie.img} />
//         ))}
//       </div>
//     </div>
//   )
// }

// I've converted the App component to a class component for your reference. I'm also using Tailwind for styling the app. Tailwind is another amazing tool that is becomimg very popular on the industry. check it out here: https://tailwindcss.com/docs/installation/using-postcss

class App extends Component {
	render() {
		return (
			<div className='container mx-auto mt-10'>
				<div className='grid grid-cols-3 gap-6'>
					{movies.map((movie) => (
						<Movie key={movie.id} title={movie.title} img={movie.img} />
					))}
				</div>
			</div>
		)
	}
}

export default App
