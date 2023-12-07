import { Link, useParams } from 'react-router-dom'

import { products } from '../Products'

const Product = () => {
	let { productId } = useParams()
	console.log(productId)
	const { name, description, price } = products.find(
		(product) => product.id === productId
	)
	return (
		<>
			<h2>{name}</h2>
			<p>{description}</p>
			<p>{price}</p>
			<Link to={'/'}>Back</Link>
		</>
	)
}

export default Product
