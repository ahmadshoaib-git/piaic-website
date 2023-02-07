import React from 'react';
import styles from './titleBar.style';

interface Props {
    children: React.ReactElement;
    title: string;
}
const TitleBar = ({ children, title }: Props) => {
    return (
        <section className={styles.container}>
            <div className={styles.innerContainer}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.titleBar}></div>
            </div>
            {children}
        </section>
    );
};

export default TitleBar;

