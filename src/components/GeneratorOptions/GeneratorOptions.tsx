import {
	useCreateImage,
	useCreateImageActions,
	useLanguage,
	useLanguageActions,
	useStyle,
	useStyleActions,
} from '../../store/greeting-store';
import './GeneratorOptions.css';

export default function GeneratorOptions() {
	const style = useStyle();
	const language = useLanguage();
	const isCreateImage = useCreateImage(); // текущее значение (boolean)
	const setStyle = useStyleActions();
	const setLanguage = useLanguageActions();
	const toggleImage = useCreateImageActions(); // экшен для смены состояния

	const handleStyleSelect = (holiday: string) => {
		setStyle(holiday);
	};

	console.log(isCreateImage, 'isCreateImage');

	return (
		<div className='generator-options'>
			<h2 className='generator-options-title'>
				<span>3</span>Настройки
			</h2>
			<div className='generator-options_items'>
				<div
					className={`generator-options-select ${style === 'Официальный' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('Официальный')}
				>
					Официальный
				</div>
				<div
					className={`generator-options-select ${style === 'Дружеский' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('Дружеский')}
				>
					Дружеский
				</div>
				<div
					className={`generator-options-select ${style === 'Юмористический' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('Юмористический')}
				>
					Юмористический
				</div>
				<div
					className={`generator-options-select ${style === 'Романтический' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('Романтический')}
				>
					Романтический
				</div>
				<div
					className={`generator-options-select ${style === 'Трогательный' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('Трогательный')}
				>
					Трогательный
				</div>
				<div
					className={`generator-options-select ${style === '18+' ? 'active' : ''}`}
					onClick={() => handleStyleSelect('18+')}
				>
					18+
				</div>
			</div>
			<div className='generator-options-language_and_image'>
				<div>
					<label htmlFor='language-select'>Язык:</label>
					<select
						id='language-select'
						value={language}
						onChange={e => setLanguage(e.target.value)}
					>
						<option value='русский'>Русский</option>
						<option value='английский'>Английский</option>
						<option value='испанский'>Испанский</option>
						<option value='украинский'>Украинский</option>
					</select>
				</div>

				<div className='checkbox-container'>
					<input
						id='generateImage'
						type='checkbox'
						// 1. Добавляем checked, чтобы чекбокс отображал состояние из стора
						checked={isCreateImage}
						// 2. Оборачиваем вызов в анонимную функцию, чтобы он срабатывал при клике
						// Либо передаем новое значение, либо просто инвертируем старое
						onChange={() => toggleImage(!isCreateImage)}
					/>
					<label htmlFor='generateImage'>Сгенерировать картинку</label>
				</div>
			</div>
		</div>
	);
}
