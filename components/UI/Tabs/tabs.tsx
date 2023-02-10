import React from 'react';

interface PropsTabs {
    active: number;
    onChange: (newActive: React.SetStateAction<number>) => void;
    children: any;
}

const Tab = ({ children }: any) => <div>{children}</div>;

const tabActiveClass = 'pointer font-semibold border-b-4 border-green !text-green !bg-black';

const Tabs = ({ active, onChange, children }: PropsTabs) => {
    return (
        <>
            <div className="flex justify-center gap-[2rem]">
                {children.map((c: { props: { title: any } }, index: number) => (
                    <a
                        key={`a-${index.toString()}`}
                        href={'#'}
                        onClick={() => onChange(index)}
                        className={`text-center uppercase tab text-2xl font-Barlow px-[1rem] py-[0.5rem] mb-[3rem] hover:text-white ${
                            active === index && tabActiveClass
                        }`}
                    >
                        {c.props.title}
                    </a>
                ))}
            </div>
            <div>{children[active]}</div>
        </>
    );
};

export { Tabs, Tab };

