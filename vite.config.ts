import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/greeting-generator/', // ДОБАВИ ТОВА (името на твоя репозиторий)
});
