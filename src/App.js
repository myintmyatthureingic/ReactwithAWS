import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        <h1>We now have Auth!</h1>
=======
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
>>>>>>> parent of 8834cf2 (changes for v2)
      </header>
      <AmplifySignOut />
    </div>
  );
}

<<<<<<< HEAD
export default withAuthenticator(App);
=======
export default App;
>>>>>>> parent of 8834cf2 (changes for v2)
