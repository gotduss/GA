import { render, screen, fireEvent } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'

import GiphyTranslate from './'

const originalEnv = process.env

beforeAll(() => {
	fetchMock.enableMocks()
	process.env = {
		REACT_APP_GIPHY_API_KEY: 'PRETEND_API_KEY',
	}
})

beforeEach(() => {
	fetch.resetMocks()
})

afterAll(() => {
	process.env = originalEnv
	fetchMock.disableMocks()
})

test('Has an input field and translate button', () => {
	render(<GiphyTranslate />)

	const input = screen.getByTestId('input-box')
	expect(input).toBeInTheDocument()

	const button = screen.getByTestId('button')
	expect(button).toBeInTheDocument()
})

test('type something on the inputfield', () => {
	render(<GiphyTranslate />)

	const input = screen.getByTestId('input-box')
	fireEvent.change(input, { target: { value: 'test' } })

	expect(input.value).toBe('test')
})

test('click on tranlate and call API', async () => {
	fetch.mockResponseOnce(
		JSON.stringify({
			data: {
				title: 'Mock title',
				images: {
					downsized_large: {
						url: 'https://mock-url/sample.gif',
					},
				},
			},
		})
	)

	render(<GiphyTranslate />)

	const input = screen.getByTestId('input-box')
	fireEvent.change(input, { target: { value: 'test' } })
	const button = screen.getByTestId('button')
	fireEvent.click(button)

	expect(fetch.mock.calls.length).toEqual(1)

	await screen.findByTestId('gif-image')
})
