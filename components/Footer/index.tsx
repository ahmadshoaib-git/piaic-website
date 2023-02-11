import { ImFacebook, ImInstagram, ImTwitter, ImLinkedin, ImYoutube } from 'react-icons/im';
export default function Banner() {
    const responsiveContainer =
        'max-w-screen-xs sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl';
    const link = ' text-gray text-lg hover:text-green transition delay-200 ease-out mb-[1rem]';
    const socialMediaIcons =
        'w-[1.5rem] h-[1.5rem] rounded-full bg-black text-yellow border-yellow mr-[0.5rem] flex justify-center items-center cursor-pointer hover:bg-yellow hover:text-black';
    return (
        <footer className="flex flex-col justify-center items-center w-screen">
            <div className={`text-white border-t-[0.2rem] border-dark-green py-[2.5rem] w-full h-full grid grid-cols-4 gap-[2rem] ${responsiveContainer}`}>
                <div className="col-span-2 break-words flex flex-col justify-between">
                    <div className="text-3xl text-white font-bold mr-4 font-Roboto uppercase flex gap-[0.5rem]">
                        <p>PANAVERSE</p> <p className="text-yellow">DAO</p>
                    </div>
                    <p className="text-gray text-xl text-justify">
                        Path leading to the future. Earn while you learn program for getting Ready for the Next Generation of the Internet. The future is here.
                    </p>
                </div>
                <div className="break-words">
                    <p className="capitalize text-2xl mb-[1rem]">Programs</p>
                    <ul>
                        <li>
                            <a href="#" className={link}>
                                Artificial Intelligence
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Cloud Native and Mobile Web Computing
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Blockchain
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Internet of Things
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Web 3.0 and Metaverse
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="break-words">
                    <p className="capitalize text-2xl mb-[1rem]">Cities</p>
                    <ul>
                        <li>
                            <a href="#" className={link}>
                                Islamabad
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Lahore
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Karachi
                            </a>
                        </li>
                        <li>
                            <a href="#" className={link}>
                                Peshawar
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center h-full w-full">
                <div className={`flex justify-center items-center h-full w-full`}>
                    <div className={`flex justify-between h-full w-full border-t-[0.2rem] border-green py-[1rem] ${responsiveContainer}`}>
                        <div className="flex">
                            <div className={socialMediaIcons}>
                                <ImFacebook />
                            </div>
                            <div className={socialMediaIcons}>
                                <ImInstagram />
                            </div>
                            <div className={socialMediaIcons}>
                                <ImTwitter />
                            </div>
                            <div className={socialMediaIcons}>
                                <ImLinkedin />
                            </div>
                            <div className={socialMediaIcons}>
                                <ImYoutube />
                            </div>
                        </div>
                        <p className="text-md text-yellow font-Barlow">© 2023 Ahmad Shoaib. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

