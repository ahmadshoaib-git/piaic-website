import { styles } from './courseBox.style';
interface Props {
    name: string;
    type: 'online' | 'onsite' | 'hybrid';
    barColorType: '1' | '2' | '3' | '4';
}
const getBarColor = (barColorType: string) => {
    switch (barColorType) {
        case '1':
            return 'bg-red';
        case '2':
            return 'bg-gradient-green';
        case '3':
            return 'bg-gradient-pink';
        case '4':
            return 'bg-gradient-yellow';
        default:
            return 'bg-gradient-yellow';
    }
};
const getType = (type: string) => {
    switch (type) {
        case 'online':
            return 'text-green';
        case 'onsite':
            return 'text-yellow';
        case 'hybrid':
            return 'text-extra-green';
        default:
            return 'text-yellow';
    }
};
export default function CourseBox({ name, barColorType = '1', type = 'onsite' }: Props) {
    return (
        <div className={styles.courseContainer}>
            <div className={`h-full w-[0.8rem] ${getBarColor(barColorType)} rounded-tl-lg rounded-bl-lg`}></div>
            <div className="w-[calc(100%_-_1rem)] flex flex-col justify-center items-start p-4">
                <p className={`uppercase text-sm font-medium ${getType(type)}`}>{type}</p>
                <p className="font-Barlow text-white text-2xl leading-8">{name}</p>
            </div>
        </div>
    );
}

