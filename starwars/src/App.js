import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import styled from "styled-components";

const LastNote = styled.p`
  color: white;
  width: 80%;
  margin: 3% auto;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      

    
      <MovieList />
      <LastNote>This project utilized React Components and Axios API from https://swapi.co/api/people. Used the bare minimum of Styled Components.</LastNote>
    </div>
  );
}

export default App;
