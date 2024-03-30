import { useState } from "react"

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submit pressed! TODO: functionality")
  }

  return <section>
    <h2>Sign Up</h2>
    <form className="columnContainer"  onSubmit={onSubmit}>
      <div className="inputLine">
        <label htmlFor="username">UserName: </label>
        <input type="text" name="username" onChange={(event)=>setUserName(event.target.value)}></input>
      </div>
      <div className="inputLine">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)}></input>
      </div>
      <input type="submit"></input>
    </form>
  </section>
}

export default SignUpForm