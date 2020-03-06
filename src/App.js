import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from '@reach/router';

import Core from './components/Core';
import SearchBar from './components/widgets/SearchBar';

function App() {

  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
