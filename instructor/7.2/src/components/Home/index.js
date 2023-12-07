import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome!!</h1>
      <p>
        Do you want to <Link to="/translate">Translate words to gifs!</Link>?
      </p>
    </>
  )
}

export default Home
