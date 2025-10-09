import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      App <br />
      <Link to={'/dashboard'}>Goto Dashboard </Link> <br />
      <Link to={'/students'}>Goto student </Link>
    </>
  )
}

export default App
