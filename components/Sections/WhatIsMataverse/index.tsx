import React from 'react';
import TitleBar from '../TitleBar';
import ReadMore from '@/components/UI/ReadMore';

const Metaverse = () => {
    return (
        <TitleBar title="Vision" position={'right'}>
            <div className="w-full text-white flex gap-8">
                <div className="flex-3 flex flex-col gap-8">
                    <p className="text-gray family-Roboto font-normal text-2xl text-justify">
                        The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is
                        community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                    </p>
                    <ReadMore title="Read More" href="#" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-end">
                    <p className="font-Roboto text-4xl leading-10 text-yellow font-bold mb-3 uppercase">Panaverse</p>
                    <p className="font-Roboto text-4xl leading-10 text-yellow font-bold  uppercase">DAO</p>
                </div>
            </div>
        </TitleBar>
    );
};

export default Metaverse;

