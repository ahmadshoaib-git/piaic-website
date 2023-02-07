'use client';
import React from 'react';
import Link from 'next/link';
import useScroll from '../../hooks/useScroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { styles } from './navBar.style';
import './navBar.style';

export default function NavBar() {
    const [nav, setNav] = React.useState(false);
    const { offset } = useScroll();

    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);
    console.log(offset, 'offset <= 1 = ', offset <= 1);
    return (
        <nav className={`${styles.nav} ${offset > 1 && styles.scrolledNav} ${nav && '!h-full'}`}>
            <div className={styles.navSectionMobile}>
                <div className="flex items-center">
                    <h1 className={styles.logo}>Panaverse</h1>
                    <ul role="list" className={styles.navListMobile}>
                        <li>
                            <Link className={styles.link} href="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="#">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="#">
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="#">
                                Platforms
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="#">
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.btnSection}>
                    <div className={`${styles.btn} border-r-2 border-r-black rounded-tl-md rounded-bl-md`}>Login</div>
                    <div className={`${styles.btn} rounded-tr-md rounded-br-md`}>Register</div>
                </div>
                <div className="sm:hidden mr-4" onClick={handleClick}>
                    {!nav ? <GiHamburgerMenu /> : <IoMdClose />}
                </div>
            </div>

            <ul role="list" className={!nav ? styles.navListWebHidden : styles.navListWeb}>
                <li className={styles.navListItemMobile}>
                    <Link onClick={handleClose} className={styles.link} href="#">
                        Home
                    </Link>
                </li>
                <li className={styles.navListItemMobile}>
                    <Link onClick={handleClose} className={styles.link} href="#">
                        About
                    </Link>
                </li>
                <li className={styles.navListItemMobile}>
                    <Link onClick={handleClose} className={styles.link} href="#">
                        Support
                    </Link>
                </li>
                <li className={styles.navListItemMobile}>
                    <Link onClick={handleClose} className={styles.link} href="#">
                        Platforms
                    </Link>
                </li>
                <li className={styles.navListItemMobile}>
                    <Link onClick={handleClose} className={styles.link} href="#">
                        Pricing
                    </Link>
                </li>

                <div className={styles.btnSection}>
                    <div className={`${styles.btn} border-r-2 border-r-black rounded-tl-md rounded-bl-md`}>Login</div>
                    <div className={`${styles.btn} rounded-tr-md rounded-br-md`}>Register</div>
                </div>
            </ul>
        </nav>
    );
}

