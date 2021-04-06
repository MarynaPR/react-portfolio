import React from 'react';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
// import About from '../About';

function Main({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case '.()resume':
                return <Resume />;
            case '.()portfolio':
                return <Portfolio />;
            case '.()contact':
                return <Contact />;
            // case '.()about me':
            // return <About />;
            default:
                return <Resume />;
        }
    };

    return (
        <section>
            <h2>{(currentPage.name)}</h2>
            <div>{renderPage(currentPage)} </div>
        </section>
    );
}
export default Main;
