import { render, screen, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Home from './'

test('If home page contains link and redirect to it', () => {
	const fakeHistory = createMemoryHistory()
	render(
		<Router location={fakeHistory} navigator={fakeHistory}>
			<Home />
		</Router>
	)

	// const link = screen.getByText('Translate words to gifs!')
	const link = screen.getByRole('link')
	expect(link).toBeInTheDocument()

	fireEvent.click(link)
	console.log(fakeHistory.location)
	expect(fakeHistory.location.pathname).toBe('/translate')
})
