import './Button.css';
import {
	useHoliday,
	useName,
	useAge,
	useHobbies,
	useStyle,
	useLanguage,
	useLoadingActions,
	useGreetingActions,
} from '../../store/greeting-store';
import { generateGreeting } from '../../services/geminiService';

export default function Button({ children }: { children?: React.ReactNode }) {
	const holidays = useHoliday();
	const name = useName();
	const age = useAge();
	const hobbies = useHobbies();
	const style = useStyle();
	const language = useLanguage();
	const setLoading = useLoadingActions();
	// const createImage = useCreateImage();

	const setGreeting = useGreetingActions();

	const handleClick = async () => {
		setLoading(true); // Устанавливаем loading в true перед началом генерации
		// добавили async
		console.log('Начинаю генерацию...');
		try {
			const result = await generateGreeting(
				holidays,
				name,
				age,
				hobbies,
				style,
				language,
			);
			setGreeting(result);
			console.log('Успех! Результат:', result);
			setLoading(false);
		} catch (e) {
			console.error('Что-то пошло не так в компоненте:', e);
			setLoading(false);
		}
	};

	return (
		<button className='button' onClick={handleClick}>
			{children}
		</button>
	);
}
