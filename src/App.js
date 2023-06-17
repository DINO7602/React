import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';

import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from './shared/dishes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
