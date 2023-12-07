import { useState } from 'react'

import MotivationalPost from '../MotivationalPost'

const MotivationalPoster = () => {
	const [title, setTitle] = useState('some title')
	const [message, setMessage] = useState('some message')
	const [imageURL, setImageURL] = useState('/images/skyscrapers.jpeg')

	const handleChange = (e, func) => {
		func(e.target.value)
	}

	return (
		<>
			<input
				type='text'
				value={title}
				placeHolder='Change title here...'
				onChange={(e) => handleChange(e, setTitle)}
			/>
			<input
				type='text'
				placeHolder='Change message here...'
				value={message}
				onChange={(e) => handleChange(e, setMessage)}
			/>
			<select
				name=''
				id=''
				value={imageURL}
				onChange={(e) => handleChange(e, setImageURL)}
			>
				<option value='/images/climbing.jpeg'>Climbing</option>
				<option value='/images/seedling.jpeg'>Seedling</option>
				<option value='/images/skyscrapers.jpeg'>SkyScrappers</option>
			</select>
			<MotivationalPost title={title} message={message} imageURL={imageURL} />
		</>
	)
}

export default MotivationalPoster
