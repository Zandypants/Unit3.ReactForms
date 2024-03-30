import { useState } from "react"

const API_URL = "https://fsa-jwt-practice.herokuapp.com/";

const SignUpForm = ({setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL + 'signup', {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body:  JSON.stringify({ username, password })
      })
      const json = await response.json();

      if (json.success) {
        setToken(json.token);
        setError(null);
      } else setError(json.message);
    }
    catch (error) {
      setError(error);
    }
  }

  return <section>
    <h2>Sign Up</h2>
    <form className="columnContainer"  onSubmit={onSubmit}>
      <div className="inputLine">
        <label htmlFor="username">UserName: </label>
        <input type="text" name="username" onChange={(event)=>setUsername(event.target.value)}></input>
      </div>
      <div className="inputLine">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}></input>
      </div>
      <input type="submit"></input>
      {error && <p>{error.toString()}</p>}
    </form>
  </section>
}

export default SignUpForm