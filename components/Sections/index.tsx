import React from 'react';
import Banner from './Banner';
import Metaverse from './Metaverse';
import WhoAreWe from './Vision';

const Sections = () => {
    return (
        <main className="flex flex-col items-center">
            <Banner />
            <WhoAreWe />
            <Metaverse />
        </main>
    );
};

export default Sections;

