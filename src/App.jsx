import { useState } from 'react'
import SignUpForm from './SignUpForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUpForm></SignUpForm>
    </>
  )
}

export default App
