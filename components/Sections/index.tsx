import React from 'react';
import Banner from './Banner';
import Metaverse from './Metaverse';
import WhoAreWe from './Vision';
import Tracks from './Tracks';
import Outcome from './OutCome';

const Sections = () => {
    return (
        <main className="flex flex-col items-center">
            <Banner />
            <WhoAreWe />
            <Metaverse />
            <Tracks />
            <Outcome />
        </main>
    );
};

export default Sections;

