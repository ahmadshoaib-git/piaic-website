import React from 'react';
import NavBar from '../NavBar';
import TopBar from '../TopBar';

const Header = () => {
    return (
        <header className="h-auto w-full absolute top-0 z-10">
            <TopBar />
        </header>
    );
};

export default Header;

