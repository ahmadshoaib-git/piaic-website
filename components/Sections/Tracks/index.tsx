import React, { Children, ReactFragment } from 'react';
import Image from 'next/image';
// import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
// import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa';
import TitleBar from '../TitleBar';
import ReadMore from '@/components/UI/ReadMore';
import Quarter from '@/components/UI/QauterBox';
import Tabs from '@/components/UI/Tabs';

type TabData = Array<{ title: string; children: React.ReactElement }>;
const composeQuarter = (children: React.ReactElement): React.ReactElement => {
    return <div className="flex-1 flex flex-wrap justify-center items-center gap-[3rem] lg:justify-center">{children}</div>;
};
const tabData: TabData = [
    {
        title: 'Artificial Intelligence',
        children: composeQuarter(
            <>
                <Quarter quarterNumber={4} bgColorType="3" quarterDescription="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming" />
                <Quarter quarterNumber={5} bgColorType="2" quarterDescription="AI-361: Deep Learning and MLOps" />
                <Quarter quarterNumber={0} bgColorType="1" quarterDescription={<p>Read More...</p>} />
            </>,
        ),
    },
    {
        title: 'Cloud Native Computing',
        children: composeQuarter(
            <>
                <Quarter quarterNumber={4} bgColorType="3" quarterDescription="CN-351: Certified Kubernetes Application Developer (CKAD)" />
                <Quarter quarterNumber={5} bgColorType="2" quarterDescription="CN-361: Developing Multi-Cloud Apps using CDK for Terraform" />
                <Quarter quarterNumber={0} bgColorType="1" quarterDescription={<p>Read More...</p>} />
            </>,
        ),
    },
    {
        title: 'Blockchain',
        children: composeQuarter(
            <>
                <Quarter quarterNumber={4} bgColorType="3" quarterDescription="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps" />
                <Quarter
                    quarterNumber={5}
                    bgColorType="2"
                    quarterDescription="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                />
                <Quarter quarterNumber={0} bgColorType="1" quarterDescription={<p>Read More...</p>} />
            </>,
        ),
    },
    {
        title: 'Internet of Things',
        children: composeQuarter(
            <>
                <Quarter quarterNumber={4} bgColorType="3" quarterDescription="AC-351: Ambient Computing with Voice Assistants and Matter Devices" />
                <Quarter quarterNumber={5} bgColorType="2" quarterDescription="AC-361: Embedded Programming using C and Rust" />
                <Quarter quarterNumber={0} bgColorType="1" quarterDescription={<p>Read More...</p>} />
            </>,
        ),
    },
    {
        title: 'Web 3.0 and Metaverse',
        children: composeQuarter(
            <>
                <Quarter quarterNumber={4} bgColorType="3" quarterDescription="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps" />
                <Quarter
                    quarterNumber={5}
                    bgColorType="2"
                    quarterDescription="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
                />
                <Quarter quarterNumber={0} bgColorType="1" quarterDescription={<p>Read More...</p>} />
            </>,
        ),
    },
];
const Tracks = () => {
    return (
        <TitleBar title="Specialized Tracks" position={'right'}>
            <>
                <div className="w-full text-white flex flex-col gap-8">
                    <div className="flex-3 flex flex-col gap-8 items-start justify-center mt-[2rem]">
                        <div className="text-gray family-Roboto font-normal text-2xl text-justify mb-[1rem]">
                            <p className="mb-[2rem]">
                                The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and
                                cutting-edge Full-Stack Web 2.0 development The graduates of this program will own products (Full-Stack App Templates, AR and VR
                                Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by
                                offering services at a rate of $50 per hour ($96,000 per year).
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-wrap justify-center items-center gap-[3rem] lg:justify-center">
                        <Quarter quarterNumber={1} bgColorType="4" quarterDescription="Javascript and Object-Oriented Programming using TypeScript" />
                        <Quarter
                            quarterNumber={2}
                            bgColorType="4"
                            quarterDescription="Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13"
                        />
                        <Quarter
                            quarterNumber={3}
                            bgColorType="4"
                            quarterDescription="Earn While You Learn: Build Full-Stack Next.js 13 Jamstack Templates, build QraphQL APIs"
                        />
                    </div>
                    <div>
                        <Tabs tabData={tabData} />
                    </div>
                </div>
            </>
        </TitleBar>
    );
};

export default Tracks;

