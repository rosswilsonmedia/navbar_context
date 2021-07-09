import React, { useContext } from 'react';

import NameContext from '../context/NameContext';

import styles from '../css/Navbar.module.css'

const Navbar = () => {
    const nameContext=useContext(NameContext);
    return (
        <header>
            <h1>Hi {nameContext.name}!</h1>
        </header>
    )
}

export default Navbar;