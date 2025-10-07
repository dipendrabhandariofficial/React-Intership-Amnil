import './App.css'
import Input from './components/Input/input'
import Button from './components/Button/Button'

function App() {


  return (
   <div className='app'>
      <Input id="name" labell="Name:" placeholder="Enter your name" />
      <Input id="email" placeholder="Enter your email" />
      <Button buttonText="Submit" variant="primary" />
      <Button buttonText="Cancel" variant="secondary" />
      <Button buttonText="Cancel" />
    </div>
  )
}

export default App
