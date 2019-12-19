import React from 'react';
import Header from './movies/Header';
import Main from './movies/Main';
import {Container} from 'react-bootstrap' 
function App (){
  return (
    <Container>
        <Header />
        <Main />
    </Container>
  );
}

export default App;