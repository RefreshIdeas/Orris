import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        home2: resolve(__dirname, "./home2.html"),
        home3: resolve(__dirname, "./home3.html"),
        about: resolve(__dirname, "./overview.html"),
      },
    },
  },

  server: {
    open: "./index.html", // Specify the path to your HTML entry point for development
  },
  plugins: [],
});