import './App.css';
import {useState} from 'react';
import fire from "./fire.js";

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)

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
        setError('The password is invalid or the user does not have a password')
        setTimeout(() => {setError(false)}, 3000);
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
        setError('Password must be 6 characters or longer or email already exists')
        setTimeout(() => {setError(false)}, 3000);
      });
  };


  return (
    <div className="App">
          <form className="Form">
          <input
            name ="email"
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button className="Submit" onClick={login}>Login </button>
          <button className="Submit" onClick={signup}>Sign Up </button>
        </form>
        {error !== false && (
            <div className="error">
              <h3 className="errmsg">{error}</h3>  
            </div>
          )}
    </div>
  );
}

export default Login;