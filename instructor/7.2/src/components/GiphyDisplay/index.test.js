import { render, screen } from '@testing-library/react'

import GiphyDisplay from './'

const mockGifData = {
	title: 'Some title',
	images: {
		downsized_large: {
			url: 'https://mock-url/sample.gif',
		},
	},
}

test('renders text when no data/props', () => {
	render(<GiphyDisplay />)
	const textElement = screen.getByText('Please enter a phrase')
	expect(textElement).toBeInTheDocument()
})

test('do not show text when prop is passed', () => {
	render(<GiphyDisplay gifData={mockGifData} />)
	const noTextElement = screen.queryByTestId('no-gif-text')
	// expect(noTextElement).not.toBeInTheDocument()
	expect(noTextElement).toBeNull()
})

test('display gif image', () => {
	render(<GiphyDisplay gifData={mockGifData} />)
	const imgElement = screen.getByTestId('gif-image')

	expect(imgElement).toBeInTheDocument()
	expect(imgElement).toHaveAttribute('alt', 'Some title')
	expect(imgElement).toHaveAttribute('src', 'https://mock-url/sample.gif')
})
