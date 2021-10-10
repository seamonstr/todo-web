import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const App = (props) => {
 
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage newValue="Yes, it's new!"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const MyComponent = () => {
  const [myString, setMyString] = useState("First string!");
  
  return (
    <div>
      <p>The value here is {myString}.</p>
      <button onClick={() => setMyString(myString + " Another bit!")}>
        Click, plz
      </button>
    </div>
  );
} 

const WelcomeMessage = ({newValue}) => <p>Welcome! Newvalue is {newValue}. <MyComponent/> </p>;

const EmbeddedStuff = () => <p>An embedded thongy.</p>;

export default App;
