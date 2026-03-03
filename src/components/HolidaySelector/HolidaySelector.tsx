import './HolidaySelector.css';
import { useHoliday, useHolidayActions } from '../../store/greeting-store';

export default function HolidaySelector() {
	// Используем селекторы
	const holidays = useHoliday();
	const setHolidays = useHolidayActions();

	const handleHolidaySelect = (holiday: string) => {
		setHolidays(holiday);
	};

	return (
		<div className='holiday-selector'>
			<h2 className='holiday-selector-title'>
				<span>1</span>Выберите праздник
			</h2>
			<div className='holiday-selector-options'>
				<div
					className={`holiday-selector-option ${holidays === 'Новый год' ? 'active' : ''}`}
					onClick={() => handleHolidaySelect('Новый год')}
				>
					Новый год
				</div>
				<div
					className={`holiday-selector-option ${holidays === 'День рождения' ? 'active' : ''}`}
					onClick={() => handleHolidaySelect('День рождения')}
				>
					День рождения
				</div>
			</div>

			<textarea
				className='holiday-selector-input'
				placeholder='Свой вариант...'
				value={holidays}
				onChange={e => setHolidays(e.target.value)}
				rows={3}
			/>
		</div>
	);
}
