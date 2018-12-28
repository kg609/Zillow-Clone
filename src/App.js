import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import InfoList from './components/InfoList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.scss';


class App extends Component {


  render() {
    return (
      <div className="container ">
        <div className="bckImg" ref={this.divRef}>
          <Navbar />
          <SearchBar />
        </div>
        <Banner />
        <InfoList />
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default App;
