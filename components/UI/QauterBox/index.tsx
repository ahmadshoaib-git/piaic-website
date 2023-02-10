import React from 'react';

interface Props {
    quarterNumber: number;
    quarterDescription: string | React.ReactElement;
    bgColorType: '1' | '2' | '3' | '4';
}

const getBgColor = (bgColorType: string) => {
    switch (bgColorType) {
        case '1':
            return 'bg-red';
        case '2':
            return 'bg-gradient-green';
        case '3':
            return 'bg-gradient-pink';
        case '4':
            return 'bg-gradient-yellow';
        default:
            return 'bg-gradient-yellow';
    }
};

const Quarter = ({ quarterNumber, quarterDescription, bgColorType }: Props) => {
    return (
        <div className={`group relative w-[18rem] py-[1.2rem] px-[1.6rem] h-[24rem] ${getBgColor(bgColorType)} rounded-lg cursor-pointer`}>
            {quarterNumber !== 0 && (
                <div className="absolute h-[6rem] w-[5rem] -left-4 -top-4 bg-red text-white rounded-lg flex justify-center items-center text-4xl group-hover:clockwiseSpin">
                    Q{quarterNumber}
                </div>
            )}
            <div className={`flex flex-col ${quarterNumber === 0 ? 'justify-center' : 'justify-between'} w-full h-full`}>
                <div
                    className={`font-Roboto text-2xl ${
                        quarterNumber === 0 ? 'text-white pt-0 flex flex-col items-center' : 'text-black pt-[5rem]'
                    } font-normal leading-7`}
                >
                    {quarterDescription}
                </div>
                {quarterNumber !== 0 && <p className="uppercase text-right text-2xl text-black font-semibold">Quarter {quarterNumber}</p>}
            </div>
        </div>
    );
};
export default Quarter;

