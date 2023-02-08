import React from 'react';
import Image from 'next/image';
import TitleBar from '../TitleBar';
import styles from './vision.style';

const Vision = () => {
    return (
        <TitleBar title="Vision">
            <div className="w-full text-white flex gap-8">
                <p className="flex-3 text-gray family-Roboto font-normal text-2xl text-justify">
                    The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is
                    community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                </p>
                <div className="flex-1 flex flex-col justify-center items-end">
                    <p className="font-Roboto text-5xl leading-10 text-yellow font-bold mb-3 uppercase">Panaverse</p>
                    <p className="font-Roboto text-5xl leading-10 text-yellow font-bold  uppercase">DAO</p>
                </div>
            </div>
        </TitleBar>
    );
};

export default Vision;

