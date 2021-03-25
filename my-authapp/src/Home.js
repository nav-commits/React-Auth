import './App.css';
import fire from "./fire.js";


function Home() {
  const logout = () => {
    fire.auth().signOut();
    };

  return (
    <div className="App">
      <h1>Logged In</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;