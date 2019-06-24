import React from 'react';
import Button from './Button';
import Todo from './Todo';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallo!</h1>
        <Button label="Klick mich!" clickHandler={(sender) => {console.log(sender.name)}}></Button>
        <br/>
        <Todo></Todo>
      </header>
    </div>
  );
}

export default App;
