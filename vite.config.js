// vite.config.js
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: "/AdvancedInventory/",
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
  plugins: [ basicSsl() ],
});
