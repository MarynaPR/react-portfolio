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
    { name: ".()resume" },
    { name: ".()portfolio" },
    { name: ".()contact" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (

    <div style={{ backgroundColor: new Date().getHours() > 20 ? "#55565e" : "white" }}>
      <div>
        <Container>
          <div id="image">
            <Header>
              <Nav
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}>
              </Nav>
            </Header>
            <Main currentPage={currentPage}></Main>
          </div>
          <Footer></Footer>
        </Container>
      </div>
    </div>
  );
}

export default App;
