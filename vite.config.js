import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import autoprefixer from "autoprefixer";
import imageminWebp from "imagemin-webp";
import imagemin from "imagemin";
import cssnano from "cssnano";
import path from "path";
import purgecss from "vite-plugin-purgecss";
import react from "@vitejs/plugin-react";

export default defineConfig({
	optimizeDeps: {
		include: ["ogl"],
	},
	build: {
		minify: 'esbuild',
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			png: { quality: 70 },
			jpeg: { quality: 70 },
			jpg: { quality: 70 },
		}),
		purgecss({
			content: ['./**/*.html', './src/**/**/*.{js,jsx,ts,tsx}'],
		}),
		{
			name: "imagemin-webp",
			apply: "serve",
			async buildStart() {
				await imagemin(["./src/assets/images/**/*.{jpg,png,jpeg}"], {
					destination: "./src/assets/webp",
					plugins: [imageminWebp({ quality: 70 })],
				});
			},
		},
	],
	base: "./",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		postcss: {
			plugins: [
				cssnano({ preset: 'default' }),
				autoprefixer(),
			],
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@import "./src/styles/main.scss";`,
			},
		},
	},
});
