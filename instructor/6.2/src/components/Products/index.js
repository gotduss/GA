import { Link, Outlet } from 'react-router-dom'

const Products = () => {
	return (
		<>
			<h1>Flower shop</h1>
			<ul>
				{products.map(({ id, name, price, description }) => {
					return (
						<li key={id}>
							<Link to={`/product/${id}`}>{name}</Link>
						</li>
					)
				})}
			</ul>
			<Outlet />
		</>
	)
}

export default Products

export const products = [
	{
		id: '573489278',
		name: 'Congratulations Bouquet',
		price: 70,
		description:
			'The perfect bouquet for a celebration such as a birthday or graduation.',
	},
	{
		id: '167489003',
		name: 'Apology Bouquet',
		price: 150,
		description: 'You need something extra when you know you messed up.',
	},
	{
		id: '234359850',
		name: 'Wedding Bouquet',
		price: 200,
		description:
			'Beautiful collection of flowers to turn heads on your special day!',
	},
]
