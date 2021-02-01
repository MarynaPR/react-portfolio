import React from 'react';

import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Main({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case '.()about me':
                return <About />;
            case '.()portfolio':
                return <Portfolio />;
            case '.()contact':
                return <Contact />;
            case '.()resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section>
                <h1>{(currentPage.name)}</h1>
            <p></p>
            <br></br>

            <div>
                {renderPage(currentPage)}
            </div>

        </section>
    );
}
export default Main;
