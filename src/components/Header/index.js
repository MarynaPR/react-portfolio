import React from 'react'

function Header(props) {
    return (
        <header className="header">
            <h2>maryna pryadka</h2>
            {props.children}
        </header>
    )
}

export default Header
