import { API_URL } from "./App";
import { useState } from "react";

const Authenticate = ({token}) => {
  const [successMsg, setSuccessMsg] = useState(null);

  const onClick = async (event) => {
    console.log("Authenticate clicked");

    try {
      const response = await fetch(API_URL + 'authenticate', { 
        method: "GET", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const json = await response.json();
      console.log(json);
      setSuccessMsg(json.message);
    } catch (error) {
      setSuccessMsg(error.toString());
    }
  }

  return <section>
    <h2>Authenticate</h2>
    <p>token: {token}</p>
    <button onClick={onClick}>check token</button>
    {successMsg && <p>{successMsg}</p>}
  </section>
}

export default Authenticate