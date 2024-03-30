import { useState } from 'react'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import './App.css'

export const API_URL = "https://fsa-jwt-practice.herokuapp.com/";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {
        token
          ? <Authenticate token={token}></Authenticate>
          : <SignUpForm setToken={setToken}></SignUpForm>
      }
    </>
  )
}

export default App
