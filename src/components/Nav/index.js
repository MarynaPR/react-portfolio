import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name)
    },
        [currentPage]);

    return (
        // <Container>
        <nav>
            <ul className="flex-row">
                {pages.map((Main) => (
                    <li className={` ${currentPage.name === Main.name && 'navActive'}`} key={Main.name}>
                        <span onClick={() => setCurrentPage(Main)}>{capitalizeFirstLetter(Main.name)}</span>
                    </li>
                ))}
            </ul>
        </nav>
        // </Container>
    )
}

export default Nav;