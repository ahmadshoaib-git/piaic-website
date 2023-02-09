import React from 'react';
import Image from 'next/image';
import TitleBar from '../TitleBar';
import ReadMore from '@/components/UI/ReadMore';

const Metaverse = () => {
    return (
        <TitleBar title="Metaverse & Web 3.0" position={'left'}>
            <>
                <div className="w-full text-white flex gap-8 flex-col-reverse lg:flex-row">
                    <div className="flex-3 flex flex-col gap-8 items-start justify-center mt-[2rem]">
                        <div className="text-gray family-Roboto font-normal text-2xl text-justify">
                            <p className="mb-[2rem]">
                                A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the
                                "metaverse." Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined
                                networked virtual world.
                            </p>
                            <p>
                                Web3, also known as the decentralized web, is the third and latest" phase” of the internet. Web3 is built on peer-to-peer
                                networks of computers that talk to each other without middlemen.
                            </p>
                        </div>
                        <ReadMore title="Read More" href="#" />
                    </div>
                    <div className="flex-1 flex justify-center items-center lg:justify-center">
                        <Image src="/images/metaverse.png" alt="Metaverse" fill className="max-w-[20rem] min-w-[20rem] max-h-[20rem] min-h-[20rem] !static" />
                    </div>
                </div>
            </>
        </TitleBar>
    );
};

export default Metaverse;

