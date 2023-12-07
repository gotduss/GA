const GiphyDisplay = ({ gifData }) => {
	if (!gifData) {
		return <p data-testId='no-gif-text'>Please enter a phrase</p>
	}
	return (
		<>
			<img
				data-testId='gif-image'
				src={gifData.images.downsized_large.url}
				alt={gifData.title}
			/>
		</>
	)
}

export default GiphyDisplay
