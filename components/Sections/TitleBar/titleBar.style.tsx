const responsiveContainer =
    'max-w-screen-xs sm:max-w-screen-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl';
const styles = {
    container: `flex flex-col justify-start items-center w-full py-[4rem] ${responsiveContainer}`,
    innerContainer: 'w-full flex items-center justify-start flex-1',
    title: 'font-bold text-leading-[3.4375rem] text-4xl text-white my-[0.7rem] mr-[2.5rem]',
    titleBar: 'h-1 rounded-sm flex-1 bg-gradient-to-r from-blue to-extra-green',
};

export default styles;

