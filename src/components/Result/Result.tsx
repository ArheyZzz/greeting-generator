import { useGreeting, useLoading } from '../../store/greeting-store';
import './Result.css';

export default function Result() {
	const loading = useLoading();
	const greeting = useGreeting();

	if (loading) {
		return <div className='result'>Генерация...</div>;
	}
	return <div className='result'>{greeting}</div>;
}
