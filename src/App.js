import React, { Component } from 'react';
import Header from './components/header/header.component';
import RightScreen from './components/right-screen/right-screen.component';
import LeftScreen from './components/left-screen/left-screen.component';
import { GlobalStyle } from './global.styles';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
          <Header />
          <RightScreen />
          <LeftScreen />
      </div>
    );
  }
}

export default App;
