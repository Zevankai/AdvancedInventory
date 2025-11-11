// vite.config.js
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path'; // <-- ADD THIS IMPORT

export default defineConfig({
  base: "/AdvancedInventory/",
  
  // This line is the new, robust fix
  publicDir: path.resolve(__dirname, 'public'), 
  
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
  plugins: [ basicSsl() ],
});