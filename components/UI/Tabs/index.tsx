'use client';
import React from 'react';
import { Tabs, Tab } from './tabs';

interface Props {
    tabData: Array<{ title: string; children: React.ReactElement }>;
}

const CustomTabs = ({ tabData }: Props) => {
    const [active, setActive] = React.useState<number>(0);

    const handleChange = (newActive: React.SetStateAction<number>) => setActive(newActive);
    return (
        <div className="w-full">
            <Tabs active={active} onChange={handleChange}>
                {tabData.map((nTab, index) => (
                    <Tab key={`T-${index.toString()}`} title={nTab.title}>
                        <React.Fragment key={`TRF-${index.toString()}`}>{nTab.children}</React.Fragment>
                    </Tab>
                ))}
            </Tabs>
        </div>
    );
};

export default CustomTabs;

