import React from 'react';
import styles from './titleBar.style';

interface Props {
    children: React.ReactElement | React.ReactFragment;
    title: string;
    position: 'left' | 'right';
}

const TitleBar = ({ children, title, position = 'left' }: Props) => {
    console.log('position >', position);
    const getPosition = (): React.ReactElement => {
        if (position === 'right')
            return (
                <>
                    <div className={`${styles.titleBar} mr-0`}></div>
                    <h4 className={`${styles.title} ml-[2.5rem] !mr-0`}>{title}</h4>
                </>
            );
        else
            return (
                <>
                    <h4 className={styles.title}>{title}</h4>
                    <div className={styles.titleBar}></div>
                </>
            );
    };
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>{getPosition()}</div>
            {children}
        </section>
    );
};

export default TitleBar;

