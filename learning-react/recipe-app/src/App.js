import React, { Component } from 'react';
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from '../data/recipes'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Recipe app</h1>
        <Menu recipes={data} />
      </div>
    );
  }
}

export default App;
