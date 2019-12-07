import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarmenu from './Navbarmenu';
import Banner from './Banner';
import GalleryComp from './GalleryComp';
import About from './About';
import ContactMe from './ContactMe';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbarmenu />
        <Banner />
        <GalleryComp />
        <About />
        <ContactMe />
        <Footer />
      </div>
    );
  };
}

export default App;
