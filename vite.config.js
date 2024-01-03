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
        team: resolve(__dirname, "./ourTeam.html"),
        realestate: resolve(__dirname, "./realEstate.html"),
        csr: resolve(__dirname, "./csr.html"),
        hospitality: resolve(__dirname, "./hospitality.html"),
        education: resolve(__dirname, "./education.html"),
        entertainment: resolve(__dirname, "./entertainment.html"),
        warehousing: resolve(__dirname, "./warehousing-parks.html"),
        projectList: resolve(__dirname, "./projectList.html"),
        projectDetail: resolve(__dirname, "./projectDetail.html"),
        cunstructionDetail: resolve(__dirname, "./cunstructionUpdate.html"),
        cunstructionupdateDetail: resolve(
          __dirname,
          "./cunstructionUpdateDetail.html"
        ),
      },
    },
  },

  server: {
    open: "./index.html", // Specify the path to your HTML entry point for development
  },

  plugins: [],
});
