import React, { useState } from 'react';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import RepoDetails from './components/repoDetails/RepoDetails';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';



import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (value) => {
    setSearchTerm(() => value);
    console.log(searchTerm);
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <SearchBar handleSearchTerm={handleSearchTerm} />
        <RepoDetails searchTerm={searchTerm} />
      </div>
    </ApolloProvider>

  );
}

export default App;
