import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ← для корневого домена (wood-supply.ru)
  // или base: './', // если сайт в корне — тоже работает, но лучше '/'
})