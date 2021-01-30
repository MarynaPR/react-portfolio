import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div style={{ backgroundColor: new Date().getHours() > 20 ? "grey" : "white" }}>
      <Container>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}></Nav>
        <Main currentPage={currentPage}></Main>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
