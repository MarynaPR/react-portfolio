import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

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
        <nav>
            <ul>
                {pages.map((Main) => (
                    <li classNmae={` ${currentPage.name === Main.name && 'navActive'}`} key={Main.name}>
                        <span onClick={() => setCurrentPage(Main)}>{capitalizeFirstLetter(Main.name)}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;