const bannerScreen = 'max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl';
const bannerTextScreen =
    ' max-w-screen-xs sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl';
const styles = {
    bannerContainer: `h-screen w-screen bg-dark-blue text-slate-200 bg-banner-image min-h-[30vh] ${bannerScreen}`,
    heading: 'font-Roboto uppercase text-green text-5xl font-black',
    bannerImg: '!top-[5rem] object-cover !h-[calc(100%-5rem)]',
    bannerTextSection: `h-full w-full flex justify-start ${bannerTextScreen}`,
    overlayInternal: 'pt-[5rem] flex align-center justify-center',
    button: 'pointer flex justify-center border-2 rounded-md py-[0.6rem] px-10 font-Roboto text-md leading-5 font-semibold outline-[0]',
    btnGreen: 'border-green text-green bg-black hover:text-black hover:bg-green',
    btnYellow: 'border-yellow text-black bg-yellow hover:text-yellow hover:bg-black',
};

export { styles };

