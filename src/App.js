import React, { useState } from 'react';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import RepoDetails from './components/repoDetails/RepoDetails';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';



import './App.css';

function App() {
  const [searchRepo, setSearchRepo] = useState();
  const [searchUser, setSearchUser] = useState();


  const handleSearchTerm = (value) => {
    setSearchUser(() => value[0]);
    setSearchRepo(() => value[1]);
    console.log(searchRepo);
    console.log(searchUser);
  }


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <SearchBar handleSearchTerm={handleSearchTerm} />
        <RepoDetails user={searchUser} repo={searchRepo} />
      </div>
    </ApolloProvider>

  );
}

export default App;
