import React from 'react';
import Button from './Button';
import Todo from './Todo';
import Counter from './Counter';
// import logo from './logo.svg';
import './App.css';

function App() {

  let counter = new Counter();
  counter.onStart = function(sender) {
    console.log('start count: ' + sender.count);
  };

  counter.onChange = (sender) => {
    console.log('change count: ' + sender.count);
  };

  function completeHandler(sender) {
    console.log('comlete count: ' + sender.count);
  }

  counter.onComplete = completeHandler;

  counter.run();


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
