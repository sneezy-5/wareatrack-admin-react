import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from "node:url";
import ViteFonts from "unplugin-fonts/vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
      AutoImport({
    imports: [ 'react-router-dom','react'],
  }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/@layouts', import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx"],
  },

  server: {
    port: 5001,
  },

})


