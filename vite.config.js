import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/pickbazar-clone/", // repo name with slashes
  plugins: [react()]
})
