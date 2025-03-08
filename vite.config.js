import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    optimizeDeps: {
        include: ['ogl'] // Добавьте сюда библиотеки, которые требуют предкомпиляции
    },
    plugins: [react()],
    base: './',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
});