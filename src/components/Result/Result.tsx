import { useGreeting, useLoading } from '../../store/greeting-store';
import { useState } from 'react';
import './Result.css';

export default function Result() {
	const loading = useLoading();
	const greeting = useGreeting();
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		if (!greeting) return;
		try {
			await navigator.clipboard.writeText(greeting);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // Сброс статуса через 2 сек
		} catch (err) {
			console.error('Ошибка при копировании:', err);
		}
	};

	if (loading) {
		return (
			<div className='result loading-state'>
				<div className='spinner'></div>
				<p>ИИ создает ваше поздравление...</p>
			</div>
		);
	}

	if (!greeting) {
		return (
			<div className='result empty'>
				<p>Здесь появится результат вашей настройки ✨</p>
			</div>
		);
	}

	return (
		<div className='result active'>
			<div className='result-content'>
				<p className='greeting-text'>{greeting}</p>
			</div>

			<button
				className={`copy-btn ${copied ? 'copied' : ''}`}
				onClick={handleCopy}
			>
				{copied ? '✅ Скопировано!' : '📋 Копировать текст'}
			</button>
		</div>
	);
}
