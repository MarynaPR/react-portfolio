import React, { useState } from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pages] = useState([
    { name: ".()about me" },
    { name: ".()portfolio" },
    { name: ".()contact" },
    { name: ".()resume" }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (

    <div id="image" style={{ backgroundColor: new Date().getHours() > 21 ? "#55565e" : "white" }}>

      <Container>
        <Header>
          <Nav
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}></Nav>
        </Header>
        <Main currentPage={currentPage}></Main>
        <Footer></Footer>
      </Container>
    </div >
  );
}

export default App;
