import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // Set the base URL to maintain the same directory structure

  build: {
    outDir: "dist", // Change the output directory to 'build'
    assetsDir: "", // Do not create an additional directory for assets
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        about: resolve(__dirname, "./overview.html"),
      },
    },
  },

  server: {
    open: "./index.html", // Specify the path to your HTML entry point for development
  },

  plugins: [],
});
