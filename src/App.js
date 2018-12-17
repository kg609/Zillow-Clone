import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container ">
        <div className="bckImg">
          <Navbar />
          <SearchBar />
        </div>
        
        <ItemList />
      </div>
    );
  }
}

export default App;
