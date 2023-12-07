import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Home'
import GiphyTranslate from '../GiphyTranslate'

import './index.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/translate" element={<GiphyTranslate />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
