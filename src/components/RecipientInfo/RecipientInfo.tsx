import {
	useAge,
	useAgeActions,
	useHobbiesActions,
	useName,
	useNameActions,
} from '../../store/greeting-store';
import './RecipientInfo.css';

export default function RecipientInfo() {
	const name = useName();
	const age = useAge();

	const setName = useNameActions();
	const setAge = useAgeActions();
	const setHobbies = useHobbiesActions();

	const handleNameChange = (e: { target: { value: string } }) => {
		setName(e.target.value);
	};
	const handleAgeChange = (e: { target: { value: string } }) => {
		setAge(Number(e.target.value));
	};

	return (
		<div className='recipient-info'>
			<h2 className='recipient-info-title'>
				<span>2</span>О получателе
			</h2>
			<div className='recipient-info-inputs'>
				<div className='recipient-info-inputs__item'>
					<label htmlFor='name'>Имя:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={handleNameChange}
					/>
				</div>
				<div className='recipient-info-inputs__item'>
					<label htmlFor='age'>Возраст:</label>
					<select
						id='age'
						name='age'
						value={age}
						onChange={e => handleAgeChange(e)}
					>
						<option value=''>Выберите возраст</option>
						{[...Array(100)].map((_, index) => (
							<option key={index + 1} value={index + 1}>
								{index + 1}
							</option>
						))}
					</select>
				</div>
				<div className='recipient-info-inputs__item'>
					<label htmlFor='hobbies'>Интересы и увлечения:</label>
					<textarea
						rows={3}
						id='hobbies'
						name='hobbies'
						onChange={e => setHobbies(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}
