import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      bestImpression: ''
    }

  }
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <div>
        <input type="text"
          data-type="firstName"
          placeholder="Last Name" />
        <input type="text"
          data-type="lastName"
          placeholder="Last Name" />
        <input type="text"
          data-type="bestImpression"
          placeholder="Best Impression" />
          <button>Join Us!</button>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
