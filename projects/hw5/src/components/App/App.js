/* Imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/Home';
import FilmLibrary from '../FilmLibrary';
import FilmDetail from '../FilmDetail';

import './App.css';

/* App component */
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" exact Component={ErrorPage} />
          <Route path="/" exact Component={Home} />
          <Route path="/films/" element={<FilmLibrary/>}>
            <Route path="/films/:id" element={<FilmDetail/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
