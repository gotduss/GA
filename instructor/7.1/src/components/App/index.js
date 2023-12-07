import { useState, useRef, useEffect } from 'react'

import './index.css'

// function App() {
// 	return (
// 		<>
// 			<nav>
// 				<ul>
// 					<li>
// 						<a href='#'>Home</a>
// 					</li>
// 					<li>
// 						<a href='#'>About</a>
// 					</li>
// 					<li>
// 						<a href='#'>Products</a>
// 					</li>
// 					<li>
// 						<a href='#'>Contact Us</a>
// 					</li>
// 				</ul>
// 			</nav>
// 			<main>
// 				{/* <p>
// 					<span className='big-heading'>Welcome</span>
// 				</p> */}
// 				<section>
// 					<h1>Welcome</h1>
// 					<p>
// 						This is the first post on this new website! To meet us,{' '}
// 						<a href='/about'>click here!</a>
// 					</p>
// 				</section>

// 				{/* <p>
// 					<span className='medium-heading'>Find out more</span>
// 				</p> */}
// 				<article>
// 					<h2>Find out more</h2>
// 					<p>
// 						If you want to find out more about how to use this,{' '}
// 						<a href='/instructions'>click here!</a>
// 					</p>
// 				</article>
// 			</main>
// 		</>
// 	)
// }

// const App = () => {
// 	const submit = (e) => {
// 		// e.preventDefault()
// 		console.log('wendel')
// 	}
// 	return (
// 		<form>
// 			<h1>Shipping information</h1>
// 			{/* <p>Enter your address:</p> */}
// 			{/* <label htmlFor='input'>Enter your address:</label> */}
// 			<input
// 				name='input'
// 				id='input'
// 				type='text'
// 				placeholder='Enter your address:'
// 				aria-label='Enter your address:'
// 				aria-required='true'
// 				required
// 			></input>
// 			{/* <p>This field is required</p> */}
// 			<button type='submit' onClick={submit}>
// 				Submit
// 			</button>
// 			<button type='button' onClick={submit}>
// 				Validate
// 			</button>
// 			{/* <input type='submit' /> */}
// 			{/* <a href=""></a> */}
// 		</form>
// 	)
// }

const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const dialog = useRef(null)

	useEffect(() => {
		if (isOpen) {
			console.log('dialog')
			dialog.current.focus()
		}
	}, [isOpen])

	return (
		<div>
			<p>
				<a href='#'>Focus before</a>
			</p>

			<div
				ref={dialog}
				tabIndex={0}
				hidden={!isOpen}
				className='popup-content'
				// onMouseLeave={() => setIsOpen(false)}
				onFocus={() => console.log('focus')}
				onBlur={() => {
					console.log('blur')
					setIsOpen(false)
				}}
			>
				<p>Extra info here!</p>
			</div>
			<div tabIndex={1}>
				<button>another</button>
			</div>

			<button onClick={() => setIsOpen(true)}>More info</button>

			<p>
				<a href='#'>Focus after</a>
			</p>
			<p>
				<button>wendel</button>
			</p>
		</div>
	)
}

export default App
