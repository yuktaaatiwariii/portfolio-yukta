import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    fs: {
      allow: [
        '..', 
        'C:/Users/ASUS/.gemini/antigravity-ide/brain/tempmediaStorage',
        'C:/Users/ASUS/.gemini/antigravity-ide/brain/1ab03bb8-92d0-4caf-b77b-7f038fb966a8/.user_uploaded'
      ]
    }
  }
})
