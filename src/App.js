import React, { useState } from 'react';
import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
import './App.css';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}></Nav>
      <main>
        {/* <Main currentPage={currentPage}></Main> */}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
