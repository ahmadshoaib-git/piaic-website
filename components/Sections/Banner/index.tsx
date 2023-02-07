import Image from 'next/image';
import { styles } from './banner.style';
export default function Banner() {
    return (
        <section className={styles.bannerContainer}>
            <Image src="/banner.jpg" alt="Metaverse" fill className={styles.bannerImg} />
            <div className={`background-overlay ${styles.overlayInternal}`}>
                <div className="max-w-screen-xl h-full w-full flex justify-start">
                    <div className="max-w-[35rem] h-full w-full banner-description flex flex-col justify-center align-start leading-[3.25rem]">
                        <h2 className="font-Roboto uppercase text-white text-5xl font-black">Path leading to the future</h2>
                        <h1 className={styles.heading}>Web 3.0 & Metaverse</h1>
                        <h3 className="font-Roboto text-xl text-white">The Future is here ...</h3>
                        <div className="flex justify-start gap-x-5 mt-[2.5rem]">
                            <button className={`${styles.button} ${styles.btnYellow}`}>Learn More</button>
                            <button className={`${styles.button} ${styles.btnGreen}`}>Apply Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

