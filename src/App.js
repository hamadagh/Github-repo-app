import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import RepoDetails from './components/repoDetails/RepoDetails'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <RepoDetails />
    </div>
  );
}

export default App;
