import { Routes, Route, Link } from 'react-router-dom'

// import { useState, useEffect } from 'react'

import HomePage from '../HomePage'
import Contact from '../Contact'
import About from '../About'

// const App = () => {
// 	const [page, setPage] = useState(window.location.pathname)
// 	const goTo = (value) => {
// 		// console.log(window.location.pathname)
// 		window.history.pushState('', '', value)
// 		setPage(value)
// 	}

// 	useEffect(() => {
// 		const handleHistoryChange = () => {
// 			setPage(window.location.pathname)
// 		}

// 		window.addEventListener('popstate', handleHistoryChange)

// 		const cleanUp = () => {
// 			window.removeEventListener('popstate', handleHistoryChange)
// 		}
// 		return cleanUp
// 	}, [])

// 	let pageContent = <p>Page not found</p>
// 	if (page === '/') {
// 		pageContent = <HomePage />
// 	} else if (page === '/contact') {
// 		pageContent = <Contact />
// 	} else if (page === '/about') {
// 		pageContent = <About />
// 	}
// 	console.log(window.location.pathname)
// 	return (
// 		<>
// 			<nav>
// 				<button onClick={() => goTo('/')}>Home</button>
// 				<button onClick={() => goTo('/contact')}>Contact</button>
// 				<button onClick={() => goTo('/about')}>About</button>
// 			</nav>
// 			<p>You are on page: {page}</p>
// 			{pageContent}
// 		</>
// 	)
// }

// export default App

const App = () => {
	return (
		<>
			<nav>
				<Link to={'/'} style={{ marginRight: 10 }}>
					Home
				</Link>
				<Link to={'/contact'} style={{ marginRight: 10 }}>
					Contact
				</Link>
				<Link to={'/about'}>About</Link>
			</nav>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</>
	)
}

export default App
