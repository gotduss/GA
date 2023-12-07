import { useState } from 'react'

function App() {
	const [names, setNames] = useState(['Fred', 'Sally', 'Mary', 'Bob'])

	const addName = () => {
		names.push('John')
		setNames(names)
		console.log('names', names)
	}

	const addNameNotMutating = () => {
		// const newNames = [...names, 'John']
		setNames([...names, 'John'])
	}

	return (
		<div>
			{names.map((name, idx) => {
				console.log(name)
				return <p key={idx}>{name}</p>
			})}
			<button onClick={addName}>Add name mutating</button>
			<button onClick={addNameNotMutating}>Add name not-mutating</button>
		</div>
	)
}
export default App
