import React from 'react';
import Image from 'next/image';
import TitleBar from '../TitleBar';
import ReadMore from '@/components/UI/ReadMore';
import CourseBox from '@/components/UI/CourseBox';

const Vision = () => {
    return (
        <TitleBar title="Vision" position={'right'}>
            <>
                <div className="w-full text-white flex gap-8 flex-col-reverse lg:flex-row">
                    <div className="flex-1 flex justify-center items-center lg:justify-start">
                        <Image src="/images/vision.png" alt="Metaverse" fill className="max-w-[25rem] min-w-[25rem] max-h-[20rem] min-h-[20rem] !static" />
                        {/* <p className="font-Roboto text-4xl leading-10 text-yellow font-bold mb-3 uppercase">Panaverse</p>
                    <p className="font-Roboto text-4xl leading-10 text-yellow font-bold  uppercase">DAO</p> */}
                    </div>
                    <div className="flex-3 flex flex-col gap-8 items-end justify-center">
                        <p className="text-gray family-Roboto font-normal text-2xl text-justify">
                            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally.
                            It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                        </p>
                        <ReadMore title="Read More" href="#" />
                    </div>
                </div>
                <div className="w-full mt-[3rem] flex flex-wrap justify-center gap-10">
                    <CourseBox name="Artificial Intelligence" barColorType="1" type="online" />
                    <CourseBox name="Cloud Native and Mobile Web Computing" barColorType="2" type="hybrid" />
                    <CourseBox name="Blockchain" barColorType="3" type="onsite" />
                    <CourseBox name="Internet of Things" barColorType="2" type="hybrid" />
                    <CourseBox name="Web 3.0 and Metaverse" barColorType="4" type="onsite" />
                </div>
            </>
        </TitleBar>
    );
};

export default Vision;

