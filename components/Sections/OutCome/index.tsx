import React from 'react';
import Image from 'next/image';
// import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
// import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa';
import TitleBar from '../TitleBar';
import ReadMore from '@/components/UI/ReadMore';

const Outcome = () => {
    return (
        <TitleBar title="Outcome of Program" position={'left'}>
            <>
                <div className="group w-full text-white flex gap-8 flex-col-reverse lg:flex-row">
                    <div className="flex-3 flex flex-col gap-8 items-start justify-center mt-[2rem]">
                        <div className="text-gray family-Roboto font-normal text-2xl text-justify mb-[1rem]">
                            <p className="mb-[2rem]">
                                As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs
                                that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per
                                hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.
                            </p>
                        </div>
                        <ReadMore title="Read More" href="#" />
                    </div>
                    <div className="flex-1 flex justify-center items-center lg:justify-center">
                        <Image
                            src="/images/outcome.png"
                            alt="outcome"
                            fill
                            className="max-w-[22rem] min-w-[22rem] max-h-[22rem] min-h-[22rem] !static group-hover:sectionImageAnimation2"
                        />
                    </div>
                </div>
            </>
        </TitleBar>
    );
};

export default Outcome;

