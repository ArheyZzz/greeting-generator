import { GoogleGenerativeAI } from '@google/generative-ai';

console.log('Ключ из ENV:', import.meta.env.VITE_GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateGreeting = async (
	holiday: string,
	name: string,
	age: number,
	hobbies: string,
	style: string,
	language: string,
): Promise<string> => {
	try {
		const prompt = `Напиши уникальное поздравление на языке: ${language}.
      Повод: ${holiday ? holiday : 'Отличный день'},
      Для кого: ${name ? name : 'Дорогой друг'},
      Возраст: ${age ? age : 'Не указан'},
      Интересы/хобби: ${hobbies ? hobbies : 'Не указаны'},
      Тон: ${style}
      Инструкции по стилю (адаптируй под культурный контекст языка ${language ? language : 'русский'}):

      — Официальный: Сдержанный, уважительный.
      — Дружеский: Теплый, неформальный.
      — Юмористический: Веселый, забавный, с доброй шуткой.
      — Романтический: Нежный, любящий, чувственный.
      — Трогательный: Душевный, эмоциональный.
      — 18+: Дерзкое, с перчинкой, сарказмом или взрослыми шутками. (Только если уместно для контекста 18+).

      ВАЖНО: Выдай ТОЛЬКО текст поздравления. Без вступлений, кавычек и лишних пояснений.
      `;

		const model = genAI.getGenerativeModel({
			model: 'gemini-2.5-flash',

			generationConfig: {
				temperature: style === '18+' ? 0.9 : 0.8,
			},
		});

		const result = await model.generateContent(prompt);

		const response = await result.response;

		const text = response.text();

		return text;
	} catch (error) {
		console.error('Error generating greeting:', error);

		return 'Ошибка при генерации поздравления.';
	}
};
