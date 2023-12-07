import { useState, useEffect } from 'react'

const DateFact = ({ month, day }) => {
	const [text, setText] = useState('')

	// this will be called when component mounts and/or updates month or day
	useEffect(() => {
		const url = `http://numbersapi.com/${month}/${day}?json`
		fetch(url)
			.then((response) => response.json())
			.then(({ text }) => setText(text))
			.catch((error) => console.error(error))
	}, [month, day])

	return <h1>{text}</h1>
}
export default DateFact
