import Link from 'next/link';
import React from 'react';

interface Props {
    title: string;
    href: string;
}
const ReadMore = ({ title, href }: Props) => {
    return (
        <Link
            className="pointer w-[10.4rem] flex justify-center border-2 rounded-md py-[0.6rem] px-9 font-Roboto text-md leading-5 font-semibold border-green text-green bg-black hover:text-black hover:bg-green"
            href={href}
        >
            {title}
        </Link>
    );
};

export default ReadMore;

