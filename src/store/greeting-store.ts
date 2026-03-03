import { create } from 'zustand';

type GreetingStore = {
	holidays: string;
	name: string;
	age: number;
	hobbies: string;
	style: string;
	language: string;
	createImage: boolean;
	greeting: string;
	loading: boolean;

	setHolidays: (holidays: string) => void;
	setName: (name: string) => void;
	setAge: (age: number) => void;
	setHobbies: (hobbies: string) => void;
	setStyle: (style: string) => void;
	setLanguage: (language: string) => void;
	setCreateImage: (createImage: boolean) => void;
	setGreeting: (greeting: string) => void;
	setLoading: (loading: boolean) => void;
};

export const useGreetingStore = create<GreetingStore>()(set => ({
	holidays: '',
	name: '',
	age: 0,
	hobbies: '',
	style: '',
	language: '',
	createImage: false,
	greeting: '',
	loading: false,

	setHolidays: holidays => set({ holidays }),
	setName: name => set({ name }),
	setAge: age => set({ age }),
	setHobbies: hobbies => set({ hobbies }),
	setStyle: style => set({ style }),
	setLanguage: language => set({ language }),
	setCreateImage: createImage => set({ createImage }),
	setGreeting: greeting => set({ greeting }),
	setLoading: loading => set({ loading }),
}));

// Чтение
export const useHoliday = () => useGreetingStore(state => state.holidays);
export const useName = () => useGreetingStore(state => state.name);
export const useAge = () => useGreetingStore(state => state.age);
export const useHobbies = () => useGreetingStore(state => state.hobbies);
export const useStyle = () => useGreetingStore(state => state.style);
export const useLanguage = () => useGreetingStore(state => state.language);
export const useCreateImage = () =>
	useGreetingStore(state => state.createImage);
export const useGreeting = () => useGreetingStore(state => state.greeting);
export const useLoading = () => useGreetingStore(state => state.loading);

// Запись (Экшен)
export const useHolidayActions = () =>
	useGreetingStore(state => state.setHolidays);
export const useNameActions = () => useGreetingStore(state => state.setName);
export const useAgeActions = () => useGreetingStore(state => state.setAge);
export const useHobbiesActions = () =>
	useGreetingStore(state => state.setHobbies);
export const useStyleActions = () => useGreetingStore(state => state.setStyle);
export const useLanguageActions = () =>
	useGreetingStore(state => state.setLanguage);
export const useCreateImageActions = () =>
	useGreetingStore(state => state.setCreateImage);
export const useGreetingActions = () =>
	useGreetingStore(state => state.setGreeting);
export const useLoadingActions = () =>
	useGreetingStore(state => state.setLoading);
