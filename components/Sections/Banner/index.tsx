import Image from 'next/image';
import { styles } from './banner.style';
export default function Banner() {
    return (
        <section className={styles.bannerContainer}>
            <Image src="/images/banner.jpg" alt="Metaverse" fill className={styles.bannerImg} />
            <div className="banner-background-overlay-top"></div>
            <div className={`banner-background-overlay-bottom ${styles.overlayInternal}`}>
                <div className={styles.bannerTextSection}>
                    <div className="max-w-[35rem] h-full w-full banner-description flex flex-col justify-center align-start leading-[3.25rem]">
                        <h2 className="font-Roboto uppercase text-white text-5xl font-black">Path leading to the future</h2>
                        <h1 className={styles.heading}>Web 3.0 & Metaverse</h1>
                        <h3 className="font-Roboto text-2xl text-white">The Future is here ...</h3>
                        <div className="flex justify-start gap-x-5 mt-[2.5rem]">
                            <button className={`${styles.button} ${styles.btnYellow} btn`}>Learn More</button>
                            <button className={`${styles.button} ${styles.btnGreen} btn`}>Apply Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

