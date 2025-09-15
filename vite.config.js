import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gayi128/TechSho/',
  server: {
    historyApiFallback: true
  }
   
});
