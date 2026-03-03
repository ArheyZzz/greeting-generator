import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import HolidaySelector from './components/HolidaySelector/HolidaySelector';
import RecipientInfo from './components/RecipientInfo/RecipientInfo';
import Result from './components/Result/Result';
import GeneratorOptions from './components/GeneratorOptions/GeneratorOptions';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app-settings'>
				<HolidaySelector />

				<RecipientInfo />

				<GeneratorOptions />

				<Button>✨ Сгенерировать</Button>
			</div>
			<div className='app-result'>
				<Result />
			</div>
		</div>
	);
}

export default App;
