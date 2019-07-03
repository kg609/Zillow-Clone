import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import InfoList from './components/InfoList';
import Footer from './components/Footer';
import './App.scss';


class App extends Component {
  constructor(){

    super();

    this.state = {
      visible: false,
    }
  }

  showComp = (event) => {
    event.preventDefault();

    this.setState({
        showMenu: true,
    });
 }

 hideComp = (event) => {
     event.preventDefault();

     this.setState({
         showMenu: false,
     })
 }

  render() {
    return (
      <div className="container ">
        <div className="bckImg" ref={this.divRef}>
          {this.state.visible}
          <Navbar />
          <SearchBar />
        </div>
        <Banner />
        <InfoList />
        <Footer />
      </div>
    );
  }
}

export default App;
