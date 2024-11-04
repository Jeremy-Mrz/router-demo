import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/movie/1">Spiderman</Link>
        <Link to="/movie/2">Superman</Link>
        <Link to="/movie/3">Wonderwoman</Link>
        <Link to="/movie/4">Batman</Link>
      </nav>
      <h1>HELLO WORLD</h1>
      <Outlet></Outlet>
    </>
  )
}

export default App
