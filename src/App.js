import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container ">
        <Navbar />
      </div>
    );
  }
}

export default App;
