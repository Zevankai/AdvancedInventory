// vite.config.js
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: "/AdvancedInventory/",
  publicDir: 'public', // <-- ADD THIS LINE
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
  plugins: [ basicSsl() ],
});