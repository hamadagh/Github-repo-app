import React from 'react';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import RepoDetails from './components/repoDetails/RepoDetails';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';



import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <SearchBar />
        <RepoDetails />
      </div>
    </ApolloProvider>

  );
}

export default App;
