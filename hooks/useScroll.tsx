import { useEffect, useState, useRef } from 'react';

const useScroll = () => {
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        const updatePosition = () => {
            if (typeof window !== 'undefined' && window?.pageYOffset) {
                setOffset(window.pageYOffset);
            }
        };

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return { offset };
};

export default useScroll;

