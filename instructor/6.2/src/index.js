import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	// createBrowserRouter,
	// RouterProvider,
	BrowserRouter,
} from 'react-router-dom'

import App from './components/App'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 	},
// ])

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	<React.StrictMode>
// 		<RouterProvider router={router} />
// 	</React.StrictMode>
// )
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
