// vite.config.js
import { defineConfig } from 'vite';
// removed @vitejs/plugin-basic-ssl because it's only for local HTTPS and causes a peer dependency mismatch on Vercel
export default defineConfig({
  base: "/AdvancedInventory/",
  server: {
    cors: {
      origin: "https://www.owlbear.rodeo",
    },
  },
  // no plugins required for production build
});
