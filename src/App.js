import './App.css';

import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
