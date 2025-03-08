import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  optimizeDeps: {
    include: ["ogl"],
  },
  plugins: [
    react(),
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
