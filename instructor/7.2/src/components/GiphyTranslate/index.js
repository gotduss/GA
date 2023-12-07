import { useState } from 'react'
import GiphyDisplay from '../GiphyDisplay'

const GiphyTranslate = () => {
	const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

	const [input, setInput] = useState('')
	const [gifData, setGifData] = useState(null)

	const inputChange = (event) => {
		setInput(event.target.value)
	}

	const translate = () => {
		if (input === '') {
			return
		}
		const url = `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${input}`
		fetch(url).then((response) => {
			return response.json().then((jsonData) => {
				console.log(jsonData)
				setGifData(jsonData.data)
			})
		})
	}

	return (
		<>
			<p>
				<input
					data-testId='input-box'
					type='text'
					value={input}
					onChange={inputChange}
				/>
				<button data-testId='button' onClick={translate}>
					Translate
				</button>
			</p>
			<GiphyDisplay gifData={gifData} />
		</>
	)
}

export default GiphyTranslate
