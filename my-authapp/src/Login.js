import './App.css';
import {useState} from 'react';
import fire from "./fire.js";

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };


  const signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };



  return (
    <div className="App">
          <form>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={login}>Login </button>
          <button onClick={signup}>Sign Up </button>
        </form>
    </div>
  );
}

export default Login;