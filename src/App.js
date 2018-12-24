import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import InfoList from './components/InfoList';
import Footer from './components/Footer';
import './App.scss';


class App extends Component {


  render() {
    return (
      <div className="container ">
        <div className="bckImg" ref={this.divRef}>
          <Navbar />
          <SearchBar />
        </div>
        
        <InfoList />
        <Footer />
      </div>
    );
  }
}

export default App;
