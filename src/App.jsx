import { useState } from 'react'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {
        token
        ? <Authenticate token={token}></Authenticate>
        : <SignUpForm setToken={setToken}></SignUpForm>
      }
      {/* <SignUpForm setToken={setToken}></SignUpForm>
      <Authenticate token={token}></Authenticate> */}
    </>
  )
}

export default App
