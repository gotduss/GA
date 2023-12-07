import { render, screen } from '@testing-library/react'

import App from './'

test('render the app', () => {
	// 1. render your component
	render(<App />)
	// 2. Grab what needs to be tested from the screen(UI)
	const text = screen.getByText('Welcome!!')
	// 3. write your expect clause
	expect(text).toBeInTheDocument()
})
