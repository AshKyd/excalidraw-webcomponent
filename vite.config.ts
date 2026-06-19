import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: 'src/excalidraw-wc.tsx',
			name: 'ExcalidrawWC',
			fileName: (format) => `excalidraw-wc.${format}.js`,
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			output: {
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
		},
		sourcemap: true,
		// Excalidraw is large, adjust warning limit
		chunkSizeWarningLimit: 2000,
	},
});
