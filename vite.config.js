import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import ViteCompression from "vite-plugin-compress";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  optimizeDeps: {
    include: ["ogl"],
  },
  plugins: [
    react(),
    ViteCompression(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
    }),
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
        autoprefixer(),
        cssnano({ preset: 'default' }),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
