import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Search-Bar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container ">
        <Navbar />
        <SearchBar />
      </div>
    );
  }
}

export default App;
