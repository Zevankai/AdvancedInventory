// vite.config.js
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'; // <-- 1. Import the new plugin

export default defineConfig({
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
    // https: true, // <-- 2. We don't need this line anymore
  },
  plugins: [ basicSsl() ], // <-- 3. Add this plugins array
});
