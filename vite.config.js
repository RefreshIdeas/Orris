import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        about: resolve(__dirname, "./about.html"),
        // contact: resolve(__dirname, 'src/contact.html'),
      },
    },
  },

  server: {
    open: "./index.html", // Specify the path to your HTML entry point for development
  },
  plugins: [],
});
