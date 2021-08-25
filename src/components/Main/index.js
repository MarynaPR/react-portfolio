import React from 'react';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Blog from '../Blog';

function Main({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case '.()resume':
                return <Resume />;
            case '.()portfolio':
                return <Portfolio />;
            case '.()blog':
                return <Blog />;
            case '.()contact':
                return <Contact />;
            default:
                return <Resume />;
        }
    };

    return (
        <section>
            <h2 style={{padding: "40px", borderBottomStyle: "solid"}}>{(currentPage.name)}</h2>
            <div style={{ padding: "40px", borderBottomStyle: "solid" }}>{renderPage(currentPage)} </div>
        </section>
    );
}
export default Main;
